
var search = function(nums, target) {
    var start,mid=0,end=nums.length-1;
    while(start<=end)
    {
        mid=((end-start)>>1)+start;
        if(nums[mid]<target)
        {
            start=mid+1;
        }
        else if(nums[mid]>target)
        {
            end=mid-1;
        }
        else
        {
            return mid;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12],9));