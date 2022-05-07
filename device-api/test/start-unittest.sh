#!/bin/bash
echo "Date: " $(date)
echo "-------------------------------------------"
echo "Verifying prerequisites"
# Verify docker installation
which docker 1> /dev/null && docker_check=true || docker_check=false
if [ ${docker_check} = true ]
then
    echo "Docker: installed"
else
    echo "Docker: missed"
    echo "please install docker and try again"
    verify_success=false
fi
# Verify node version greater than 14.0.0
[ $(node -v|cut -d . -f1|sed "s/v//g") -ge 14 ] && node_version_check=true || node_version_check=false
if [ ${node_version_check} = true ]
then
    echo "Node Version: $(node -v)" 
else
    echo "Node Version: $(node -v)"
    echo "Please upgrade the node version to at least 14.0.0"
    verify_success=false
fi

${verify_success:-true} && echo "Verification success" || exit 1
echo "-------------------------------------------"
echo "Installing dependency"
npm install 
echo "-------------------------------------------"
echo "Building test environment"
echo "Please be patient it will take around 30s to complete"
docker compose -f ../docker-compose.yml up --detach --always-recreate-deps && echo "Test environment is ready"
sleep 5
echo "-------------------------------------------"
echo "Starting unit test"
mocha && echo "Unit test success" && unit_test_success=true || echo "Unit test fail"
echo "-------------------------------------------"
echo "Destroying test environment"
docker compose down && echo "Test environment destoryed"
echo "-------------------------------------------"
echo "Result"
if [ ${unit_test_success:-false} ]
then
    echo "Unit test success ,progress completed." 
    exit 0
else
    echo "Unit test fail, please check and run again"
    exit 1
fi
