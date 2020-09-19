(() => {

    const ineff_fib = (n) => {
        if (n == 1 || n == 2) {
            result = 1;
        } else {
            result = ineff_fib(n - 1) + ineff_fib(n - 2);
        }

        return result;
    };


    const eff_fib = (n, dict) => {
        if (dict[n] != null) {
            return dict[n];
        }
        if (n == 1 || n == 2) {
            result = 1;
        } else {
            result = eff_fib(n - 1, dict) + eff_fib(n - 2, dict);
        }
        dict[n] = result;
        return result;
    }

    const bottom_up_fib = (n) => {
        if (n == 1 || n == 2) return 1;
        bottom_up = [];
        bottom_up[0] = 1;
        bottom_up[1] = 1;
        for(var i = 2; i < n; i++){
            bottom_up[i] = bottom_up[i-1] + bottom_up[i-2];
        }
        return bottom_up[n-1];
    }

    const stopWatch = (name, start, callabck) => {
        callabck();
        console.log(`Elapsed Time for ${name}, ${(new Date() - start)} ms`);
    }

    stopWatch("Memoized Fib Solution: O(n)", new Date(), () => {
        console.log(eff_fib(40, {}));
    });


    stopWatch("Regular Fib O(2^n)", new Date(), () => {
        console.log(ineff_fib(40));
    })

    stopWatch("Bottom_Up Fib O(n)", new Date(), () => {
        console.log(bottom_up_fib(40));
    })

})();