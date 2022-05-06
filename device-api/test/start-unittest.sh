#!/bin/bash
echo "Date: " $(date)
echo "-------------------------------------------"
echo "Verifying prerequisites"
verify_success=true
which docker 1>/dev/null && echo "Docker: installed" || (echo "Docker: missed" && echo "please install docker and try again" && verify_success=false)
[ $(node -v|cut -d . -f1|sed "s/v//g") -ge 10 ] && echo "Node Version: $(node -v)" || (echo "Node Version: $(node -v)" && echo "Please upgrade the node version to at least 10.0.0" && verify_success=false)
[ ! ${verify_success} ] || exit 1
echo "-------------------------------------------"
echo "Installing dependency"
npm install 
echo "-------------------------------------------"
echo "Building test environment"
echo "Please be patient it will take around 30 second to complete"
docker compose -f ../docker-compose.yml up --detach --always-recreate-deps && echo "Test environment is ready"
sleep 5
echo "-------------------------------------------"
echo "Starting unit test"
mocha && (echo "Unit test success";unit_test_success=true) || (echo "Unit test fail";unit_test_success=false)
echo "-------------------------------------------"
echo "Destroying test environment"
docker compose down && echo "Test environment destoryed"
echo "-------------------------------------------"
echo "Result"
${unit_test_success} && echo "Unit test success ,progress completed." || echo "Unit test fail, please check and run again"
