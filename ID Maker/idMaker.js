idMaker.addEventListener("click", function(){
    let Company=document.getElementById("company").value
    let Address=document.getElementById("address").value
    let Name=document.getElementById("name").value
    let date=document.getElementById("DOB").value

let Country=document.getElementById("nationality").value
    let Gender=document.getElementById("gender").value
    let Occupation=document.getElementById("occupation").value

    
    document.getElementById("postCompany").innerText=Company
    document.getElementById("postAddress").innerText=Address
    document.getElementById("postName").innerText="Full name: "+Name
    document.getElementById("postDOB").innerText="D.O.B: "+date
    document.getElementById("postCountry").innerText="Nationality: "+Country
    document.getElementById("postGender").innerText="Occupation: "+Occupation
    document.getElementById("postOccupation").innerText="Gender: "+Gender

    
})
