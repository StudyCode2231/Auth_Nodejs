const express=require('express')
const app=express()
const cors=require('cors')
const stytch=require('stytch')

app.use(cors())
app.use(express.json())
// it will ensure the attachment of frontend part adn backend part 

const client=new stytch.Client({
    project_id:'project-test-ff01ea98-41b2-4052-9c15-b455771c8f4f',
    secret:'secret-test-9hXcUOe3UCKEnkBSVuP_Zkre4bq4MzKwUug=',
    env:stytch.envs.test,
});

app.post('/login',async(req,res)=>{
    const email=req.body.email
    const params={
        email,
        login

    }
    const response =await client.magicLinks.email.loginOrCreate()
    // it will create of a/c or sign in
})

app.listen(4000,() =>{
    console.log("Server is running !")
})