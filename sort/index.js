var nums = [3, -7, 2];

if (nums[0] > nums[1] && nums[0] > nums[2]) {
    if (nums[1] > nums[2]) {
        console.log(`${nums[0]} : ${nums[1]} : ${nums[2]}`);
    }
    else {
        console.log(`${nums[0]} : ${nums[2]} : ${nums[1]}`);
    }
}
else if (nums[1] > nums[0] && nums[1] > nums[2]) {
    if (nums[0] > nums[2]) {
        console.log(`${nums[1]} : ${nums[0]} : ${nums[2]}`);
    }
    else {
        console.log(`${nums[1]} : ${nums[2]} : ${nums[1]}`);
    }
}
else{
    if (nums[1] > nums[0]) {
        console.log(`${nums[2]} : ${nums[1]} : ${nums[0]}`);
    }
    else {
        console.log(`${nums[2]} : ${nums[0]} : ${nums[1]}`);
    }

}


for (var i = 1; i < nums.length; i++) {

    for (var j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
            var x = nums[i];
            nums[i] = nums[j];
            nums[j] = x;
        }
    }
}

console.log(nums);