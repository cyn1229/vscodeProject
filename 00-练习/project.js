let nums=[1,5,8,2,0];
function getMaxAndMin([])
{
    let max=Number.MIN_VALUE;
    let min=Number.MAX_VALUE;
    for(i=1;i<nums.length;i++)
    {
        // if(max<nums[i])
        // {
        //     max=nums[i];
        // }
        // if(min>nums[i])
        // {
        //     min=nums[i];
        // }
        max<nums[i]?max=nums[i]:max;
        min>nums[i]?min=nums[i]:min;
    }
    return [max,min]
}
console.log(getMaxAndMin(nums));