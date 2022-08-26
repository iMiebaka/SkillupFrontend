// This loop will run from 0 till 14

const arr = [100, 2, 300]


for (let i = 1; i < arr.length; i++) {
    document.write("First loop: " + i + "</br>")

    //  j < i
    //  0 < 1 first fail
    //  0 < 2 second pass
    for (let j = 0; j < i; j++) {
        //  j < i

        //  0 < 1 first
        // fail

        // 0 < 2 second
        // 1 < 2
        // fail

        // Swap
        // is index 1 greater than index 0 (first loop)?
            //  1        0
        if (arr[i] > arr[j]) {
            // Keep a copy of the previous one
            const photcopy = arr[i];
            arr[i] = arr[j];
            arr[j] = photcopy;
        }

    }


    document.write("*** End of ", i + 1, " loop **** </br> </br>")
}

document.write(arr)