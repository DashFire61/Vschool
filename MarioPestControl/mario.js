const form = document.mform
const results = document.getElementById('results')


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let total = ((Number(form.BobombsCaught.value)*7) + (Number(form.GoombasCaught.value)*5) + (Number(form.CheepsCaught.value)*Number(11)))
    results.textContent = total
    form.BobombsCaught.value = ""
    form.GoombasCaught.value = ""
    form.CheepsCaught.value = ""

})