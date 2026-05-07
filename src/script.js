function calculate(principal, rate, time) {
    // Correct the code to prevent TypeErrors
    // All input values are properly converted to numbers before use in calculations.
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        return "Invalid input";
    }

    return (p * r * t) / 100;
}

// Logic to attach event listeners if running in the browser
if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", function() {
        const calculateBtn = document.getElementById("calculateBtn");
        
        if(calculateBtn) {
            calculateBtn.addEventListener("click", function() {
                const principal = document.getElementById("principal").value;
                const rate = document.getElementById("rate").value;
                const time = document.getElementById("time").value;
                
                const result = calculate(principal, rate, time);
                
                document.getElementById("result").innerText = typeof result === 'number' 
                    ? `Total Interest: $${result.toFixed(2)}` 
                    : result;
            });
        }
    });
}

// Export for Jasmine testing and Webpack
if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculate;
}
