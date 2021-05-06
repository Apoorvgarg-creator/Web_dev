$(function (){
    let kmBox = $('#km')
    let minBox = $('#min')
    let calcBtn = $('#calcfare')
    let fareDiv = $('#fare')
    let rateBtn = $('#getRate')
    let rateDiv = $('#rates')
    calcBtn.click(function () {
        $.post('/calcfare',{
            km : kmBox.val(),
            min : minBox.val()
        }, function (data) {
            fareDiv.text(data.fare)
        })
    })

    rateBtn.click(() => {
        $.get('/rate', function (data){
            let prettyRateData = `
            <p>Fixed fare = ₹ ${data.fixed} for ${data.minkm} km  </p>
            
           <p> Fare (Distance) = ₹ ${data.perKm} /km  </p>
            
            <p>Fare (waiting) = ₹ ${data.perMin} / min (after first ${data.freeMin} min </p>
            `
            rateDiv.html(prettyRateData)
        })
    })

})