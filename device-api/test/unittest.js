//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let mock1_name = "Temperature Sensor"
let mock1_owner = "Walter"
let mock1_productType = "Weather"
let mock2_name = "Humidity Sensor"
let mock2_owner = "David"
let mock2_productType = "Weather"
let mock3_name = "Door Sensor"
let mock3_owner = "Peter"
let mock3_productType = "Home"

chai.use(chaiHttp);

describe('Add mock object', function(){
    it('Add mock object 1: '.concat(mock1_name), (done) => {
      chai.request('http://localhost:3000')
          .post('/devices')
          .send({
            "name": mock1_name,
            "owner": mock1_owner,
            "productType": mock1_productType
          })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
    })
    it('Add mock object 2: '.concat(mock2_name), (done) => {
      chai.request('http://localhost:3000')
          .post('/devices')
          .send({
            "name": mock2_name,
            "owner": mock2_owner,
            "productType": mock1_productType
          })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
    })
    it('Add mock object 3: '.concat(mock3_name), (done) => {
      chai.request('http://localhost:3000')
          .post('/devices')
          .send({
            "name": mock3_name,
            "owner": mock3_owner,
            "productType": mock3_productType
          })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
    })
})

describe('Verify after adding mock object', () => {
  describe('Display mock object 1', () => {
   it('Name = '.concat(mock1_name), (done) => {
      chai.request('http://localhost:3000')
          .get('/devices')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('name').eql(mock1_name);
            done();
          });
    })
    it('Owner = '.concat(mock1_owner), (done) => {
      chai.request('http://localhost:3000')
          .get('/devices')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('owner').eql(mock1_owner);
            done();
          });
    })
    it('ProductType = '.concat(mock1_productType), (done) => {
      chai.request('http://localhost:3000')
          .get('/devices')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('productType').eql(mock1_productType);
            done();
           });
    })
  })

  describe('Display mock object 2', () => {
    it('Name = '.concat(mock2_name), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[1].should.have.property('name').eql(mock2_name);
             done();
           });
             
     })
     it('Owner = '.concat(mock2_owner), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[1].should.have.property('owner').eql(mock2_owner);
             done();
           });
     })
     it('ProductType = '.concat(mock2_productType), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[1].should.have.property('productType').eql(mock2_productType);
             done();
            });
     })
   })
   describe('Display mock object 3', () => {
    it('Name = '.concat(mock3_name), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[2].should.have.property('name').eql(mock3_name);
             done();
           });
             
     })
     it('Owner = '.concat(mock3_owner), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[2].should.have.property('owner').eql(mock3_owner);
             done();
           });
     })
     it('ProductType = '.concat(mock3_productType), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[2].should.have.property('productType').eql(mock3_productType);
             done();
            });
     })
   })
})
describe("Update mock object", () => {
  it('Updating name for object 1: '.concat(mock1_name, " to Light Sensor"), (done) =>{
    chai.request('http://localhost:3000')
        .put('/devices/1')
        .send({
          name: "Light Sensor"
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
  })
  it('Updating owner for object 2: '.concat(mock2_owner, " to May"), (done) =>{
    chai.request('http://localhost:3000')
        .put('/devices/2')
        .send({
          owner: "May"
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
  })
  it('Updating productType for object 3: '.concat(mock3_productType, " to Security"), (done) =>{
    chai.request('http://localhost:3000')
        .put('/devices/3')
        .send({
          productType: "Security"
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
  })
})  

describe('Verify after updating mock object', () => {
  describe('Display mock object 1', () => {
   it('Name = '.concat("Light Sensor"), (done) => {
      chai.request('http://localhost:3000')
          .get('/devices')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('name').eql("Light Sensor");
            done();
          });
    })
    it('Owner = '.concat(mock1_owner), (done) => {
      chai.request('http://localhost:3000')
          .get('/devices')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('owner').eql(mock1_owner);
            done();
          });
    })
    it('ProductType = '.concat(mock1_productType), (done) => {
      chai.request('http://localhost:3000')
          .get('/devices')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('productType').eql(mock1_productType);
            done();
           });
    })
  })

  describe('Display mock object 2', () => {
    it('Name = '.concat(mock2_name), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[1].should.have.property('name').eql(mock2_name);
             done();
           });
             
     })
     it('Owner = '.concat("May"), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[1].should.have.property('owner').eql("May");
             done();
           });
     })
     it('ProductType = '.concat(mock2_productType), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[1].should.have.property('productType').eql(mock2_productType);
             done();
            });
     })
   })
   describe('Display mock object 3', () => {
    it('Name = '.concat(mock3_name), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[2].should.have.property('name').eql(mock3_name);
             done();
           });
             
     })
     it('Owner = '.concat(mock3_owner), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[2].should.have.property('owner').eql(mock3_owner);
             done();
           });
     })
     it('ProductType = '.concat("Security"), (done) => {
       chai.request('http://localhost:3000')
           .get('/devices')
           .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('array');
                 res.body[2].should.have.property('productType').eql("Security");
             done();
            });
     })
   })
})


describe("Delete mock object", () => {
  it("Delete mock object1: ".concat(mock1_name),(done) => {
   chai.request('http://localhost:3000')
   .delete('/devices/1')
   .end((err, res) => {
         res.should.have.status(200);
     done();
    });
  })
  it("Delete mock object2: ".concat(mock2_name),(done) => {
   chai.request('http://localhost:3000')
   .delete('/devices/2')
   .end((err, res) => {
         res.should.have.status(200);
     done();
    });
  })
  it("Delete mock object3: ".concat(mock3_name),(done) => {
   chai.request('http://localhost:3000')
   .delete('/devices/3')
   .end((err, res) => {
         res.should.have.status(200);
     done();
    });
  })
})
describe('Verify after deleting mock object', () => {
  it('Number of mock object = 0', (done) => {
    chai.request('http://localhost:3000')
        .get('/devices')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(0);
          done();
        });
  })
})