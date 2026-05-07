// Requirement for Task 2: Ensure correct code to prevent TypeErrors
// All input values are properly converted to numbers before use in calculations

function calculateSimpleInterest(principal, rate, time) {
    // Explicitly converting to Number to prevent TypeErrors and string concatenation bugs
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        return "Please enter valid numbers";
    }

    const interest = (p * r * t) / 100;
    return interest;
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
                
                const result = calculateSimpleInterest(principal, rate, time);
                
                document.getElementById("result").innerText = typeof result === 'number' 
                    ? `Total Interest: $${result.toFixed(2)}` 
                    : result;
            });
        }
    });
}

// Export for Jasmine testing and Webpack
if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculateSimpleInterest;
}
