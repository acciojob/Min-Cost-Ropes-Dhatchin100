function mincost(arr)
{ 
arr.sort((a, b) => a - b);
    
    // Initialize the total cost
    let totalCost = 0;
    
    // Combine ropes until only one remains
    while (arr.length > 1) {
        // Get the two smallest ropes
        const rope1 = arr.shift();
        const rope2 = arr.shift();
        
        // Calculate the cost of combining them
        const cost = rope1 + rope2;
        
        // Add the cost to the total
        totalCost += cost;
        
        // Insert the combined rope back into the array
        arr.push(cost);
        // Re-sort the array (optional, but improves efficiency)
        arr.sort((a, b) => a - b);
    }
    
    return totalCost;
}

module.exports=mincost;
