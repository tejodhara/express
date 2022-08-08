

const request = require('supertest')
const app = require('../app.js')

//Register endpoint testing

describe("POST /user/register",()=>{
    test('OK Register is working',async ()=>{
         const res = await request(app)
                        .post('/user/register')
                        .set('Accept','application/json')
                        .send({
                            "fname":"pawan",
                            "lname":"raj",
                            "email":"pawan@gmail.com",
                            "password":"pawan@gmail.com",
                            "role":"admin"
                        })
            expect(res.statusCode).toEqual(200)
    },20000)
})

//login

describe('POST /user/login',()=>{
    test('OK LOGIN works', async ()=>{
        const res = await request(app)
                    .post('/user/login')
                    .set('Accept','application/json')
                    .send({
                        "email":"rohith@gmail.com",
                        "password":"rohith@gmail.com",
                    })
        console.log(res.statusCode);
        expect(res.statusCode).toEqual(200)
    },20000)
})

//Product/products end point

describe('GET /products/products',()=>{
    let token = null;
    beforeEach((done)=>{
            request(app)
                    .post('/user/login')
                    .send({
                        "email":"rohith@gmail.com",
                        "password":"rohith@gmail.com",
                    })
                    .end((req,res)=>{
                        token=res.body.data.token
                        done()
                    } )
        
    })
   test('OK Products getting', async ()=>{
       const res = await request(app)
                         .get('/products/products')
                         .set('Authorization',"Bearer "+token)

            expect(res.statusCode).toEqual(200)
   },20000)

    })
