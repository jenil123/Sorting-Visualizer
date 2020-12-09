var slider = document.getElementById("range");
var area=document.querySelector(".area");
var mergeSort=document.getElementById("merge");
var quicksort1=document.getElementById("quick1");
var bubblesort=document.getElementById("bubble");
var selectionsort=document.getElementById("selection");
var insertionsort=document.getElementById("insertion");
var heapsort=document.getElementById("heap");
var quicksort2=document.getElementById('quick2')
var len ;
len=slider.value;
console.log(len)
generateArray(len)
slider.oninput = function() {
  len=this.value
  console.log(len)
  generateArray(len)
}
function generateArray(len)
{
    console.log(len)
    let widthOfBar=Math.floor(1280/len);
    console.log(widthOfBar)
    array=[]
    for(let i=0;i<len;i++)
    {
        
        array.push(Math.floor((Math.random() * 40) + 5));
    }
    area.innerHTML='';
    for(let i=0;i<len;i++)
    {   
        let element=document.createElement('div')
        element.setAttribute('class','element');
        element.style.height=(array[i]*10)+"px";
        element.style.width=widthOfBar+"px"
        area.appendChild(element)
    }
    console.log(area)
    console.log(document.querySelector('.area').childElementCount);
}
let run=true;
let stop=false;
let pause=document.getElementById('pause')
let play=document.getElementById('play');
pause.addEventListener('click',()=>{

    if(run===true)
    {
        run=false;
    }
})
play.addEventListener('click',()=>{
    if(run==false)
    {
        run=true;
    }
})
async function pauseAnimation () {
while(run==false)
    await sleep(10);
return;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 bubblesort.addEventListener('click', async()=>{
    slider.disabled=true;
    quicksort1.disabled=true;
    quicksort2.disabled=true;
    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true
    heapsort.disabled=true
    run=true;
    let child=area.childNodes;
    console.log(child[0])
    for(let i=0;i<len;i++)
    {
        for(let j=0;j<len-i-1;j++)
        {
            child[j].style.backgroundColor='yellow';
            let h1=child[j].style.height;
            h1 =h1.substr(0, h1.length - 2);
            h1 = parseInt(h1);
            let h2=child[j+1].style.height;
            h2 = h2.substr(0, h2.length - 2);
            h2 = parseInt(h2);
            child[j+1].style.backgroundColor='red';
            await sleep(10);
            if(h1>h2)
            {
                child[j + 1].parentNode.insertBefore(child[j + 1], child[j]);
            }
            if(run===false)
            await pauseAnimation();
            child[j].style.backgroundColor = "blue";
            child[j + 1].style.backgroundColor = "blue";

        }
    }
    slider.disabled=false;
    quicksort1.disabled=false;
    quicksort2.disabled=false;
    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false
    heapsort.disabled=false  
});
selectionsort.addEventListener('click', async()=>{
    slider.disabled=true;
    quicksort1.disabled=true;
    quicksort2.disabled=true;
    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true
    heapsort.disabled=true
    run=true;
    let child=area.childNodes;
    console.log(child[0])
    run=true
    for(let i=0;i<len;i++)
    {
        min_index=i;
        child[min_index].style.backgroundColor='yellow';
        for(let j=i+1;j<len;j++)
        {
            let h1=child[min_index].style.height;
            h1 =h1.substr(0, h1.length - 2);
            h1 = parseInt(h1);
            let h2=child[j].style.height;
            h2 = h2.substr(0, h2.length - 2);
            h2 = parseInt(h2);
            child[j].style.backgroundColor='red';
            await sleep(10);
            if(h1>h2)
            {
                child[min_index].style.backgroundColor='blue';
                min_index=j;
                child[j].style.backgroundColor='yellow'
            }
            else{
                child[j].style.backgroundColor='blue';
            }
            if(run===false)
            await pauseAnimation();
        }
        
        child[min_index].parentNode.insertBefore(child[min_index], child[i]);
        child[min_index].style.backgroundColor = "blue";
        child[i].style.backgroundColor = "blue";
        
    }
    slider.disabled=false;
    quicksort1.disabled=false;
    quicksort2.disabled=false;
    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false
    heapsort.disabled=false  
});
mergeSort.addEventListener('click', async ()=>{
    slider.disabled=true;
    quicksort1.disabled=true;
    quicksort2.disabled=true;
    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true
    heapsort.disabled=true
    run=true;
    let child=area.childNodes;
    console.log(child[0])
    run=true
    await merge(0,len-1);
    slider.disabled=false;
    quicksort1.disabled=false;
    quicksort2.disabled=false;
    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false
    heapsort.disabled=false        

})

async function merge(l,r){
    if(l<r)
    {
        let child=area.childNodes;
        let mid=Math.floor((r+l)/2);
        await merge(l,mid);
        await merge(mid+1,r);
        await mergesort(l,mid,r);
        await sleep(10);
        if(run===false)
            await pauseAnimation();
    }
    
}
async function mergesort(l,mid,r)
{
    temp_arr=[];
    let child=area.childNodes;
    let i=l
    let j=mid+1;
    while(i<=mid&&j<=r)
    {
        child[i].style.backgroundColor = "yellow";
        child[j].style.backgroundColor = "red";
        if(run===false)
            await pauseAnimation();
        await sleep(10);
        child[i].style.backgroundColor = "blue";
        child[j].style.backgroundColor = "blue";
        if(array[i]<=array[j])
        {
            temp_arr.push(array[i]);
            i++;
        }
        else{
            temp_arr.push(array[j]);

            j++;
        }
    }
    while(i<=mid)
    {
        
        temp_arr.push(array[i]);
        i++;
    }
    while(j<=r)
    {
        
        temp_arr.push(array[j]);
        j++;
    }
    let k=0;
    for(let i=l;i<=r;i++)
    {
        array[i]=temp_arr[k];
        k++;
    }
    if(run===false)
            await pauseAnimation();
    let widthOfBar=Math.floor(1280/len);
    for(let i=l;i<=r;i++)
    {   
        child[i].style.height=(array[i]*10)+"px";
    }
}

insertionsort.addEventListener('click',async ()=>{
    let key;
    slider.disabled=true;
    quicksort1.disabled=true;
    quicksort2.disabled=true;
    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true
    heapsort.disabled=true
    run=true;
    run=true;
    let child=area.childNodes;
    for(let i=1;i<array.length;i++)
    {
        let j=i-1;
        key=array[i];
        child[i].style.backgroundColor="yellow";
        while(j>=0&&array[j]>key)
        {
            child[j].style.backgroundColor="red"
            
                array[j+1]=array[j];
                child[j+1].style.height=(array[j]*10)+"px";
            if(run===false)
            {
                await pauseAnimation();
            }
            await sleep(10);
            child[j].style.backgroundColor="blue"
            j--;
            
        }
        child[i].style.backgroundColor="blue";
        child[j+1].style.height=(key*10)+"px"
        array[j+1]=key;
    }
    slider.disabled=false;
    quicksort1.disabled=false;
    quicksort2.disabled=false;
    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false
    heapsort.disabled=false  
})

quicksort1.addEventListener('click',async ()=>{
    slider.disabled=true;
    quicksort1.disabled=true;
    quicksort2.disabled=true;
    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true
    heapsort.disabled=true
    run=true;
    console.log(array)
    await quickSort(0,len-1);
    console.log(array)
    slider.disabled=false;
    quicksort1.disabled=false;
    quicksort2.disabled=false;
    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false
    heapsort.disabled=false  

})
quicksort2.addEventListener('click',async ()=>{
    slider.disabled=true;
    quicksort1.disabled=true;
    quicksort2.disabled=true;
    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true
    heapsort.disabled=true
    run=true;
    console.log(array)
    await quickSort1(0,len-1);
    console.log(array)
    slider.disabled=false;
    quicksort1.disabled=false;
    quicksort2.disabled=false;
    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false
    heapsort.disabled=false  

})
async function quickSort(l,r)
{
    
    if(l<=r)
    {
        let child=area.childNodes;
        let pivot=await qsort(l,r);
        if(run===false)
        {
            await pauseAnimation();
        }
        child[pivot].style.backgroundColor="blue";
        await quickSort(l,pivot-1);
        await quickSort(pivot+1,r);
    }
    
}
async function quickSort1(l,r)
{
    
    if(l<=r)
    {
        let child=area.childNodes;
        let pivot=await qsort1(l,r);
        if(run===false)
        {
            await pauseAnimation();
        }
        child[pivot].style.backgroundColor="blue";
        await quickSort1(l,pivot-1);
        await quickSort1(pivot+1,r);
    }
    
}
async function qsort1(l,r,pivot)
{
    let key=array[l];
    let index=l;
    let child=area.childNodes;
    child[l].style.backgroundColor="red"
    child[r].style.backgroundColor="red"
    await sleep(10);
    child[l].style.backgroundColor="green";
    child[r].style.backgroundColor="green"
    let i=l;
    let j=r;
    while(i<=j)
    {
        while(array[i]<=key)i++;
        while(array[j]>key)j--;
        if(i<j)
        {
            child[i].style.backgroundColor="black";
            child[i].style.backgroundColor="yellow"
            await sleep(10);
            let t=array[i];
            array[i]=array[j];
            array[j]=t;
            child[i].style.height=(array[i]*10)+"px";
            child[j].style.height=(array[j]*10)+"px";
            
            child[i].style.backgroundColor = "green";
            child[j].style.backgroundColor = "green";
        }
    }
    let t=array[l]
    array[l]=array[j];
    array[j]=t;
    child[l].style.height=(array[l]*10)+"px";
    child[j].style.height=(array[j]*10)+"px";
    await sleep(10);
    return j;
}
async function qsort(l,r,pivot)
{
    let key=array[r];
    let index=l;
    let child=area.childNodes;
    for(let i=l;i<r;i++)
    {
        
        child[index].style.backgroundColor="red"
        child[i].style.backgroundColor="yellow"
        if(run===false)
        {
            await pauseAnimation();
        }
        await sleep(10);
        child[i].style.backgroundColor="green";
        child[index].style.backgroundColor="green"
        if(array[i]<key)
        {
            let temp=array[index];
            array[index]=array[i];
            array[i]=temp;
            child[index].style.height=(array[index]*10)+"px";
            child[i].style.height=(array[i]*10)+"px";
            index++;
        }
        child[i].style.backgroundColor=pivot
        
    }
    [array[index], array[r]] = [array[r], array[index]]
    child[index].style.height=(array[index]*10)+"px";
    child[r].style.height=(array[r]*10)+"px";
    child[r].style.backgroundColor=pivot
    return index;
}
let arrLength=0;
heapsort.addEventListener('click',async()=>{
    slider.disabled=true;
    quicksort1.disabled=true;
    quicksort2.disabled=true;
    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true
    heapsort.disabled=true
    run=true;
    console.log(array)
    await heapSort();
    console.log(array)
    slider.disabled=false;
    quicksort1.disabled=false;
    quicksort2.disabled=false;
    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false
    heapsort.disabled=false  
});
async function maxHeap(index,n)
{
    let child=area.childNodes;
    let l=2*index+1;
    let r=2*index+2;
    
    let max=index;

    console.log(n)
    
    
    if(l<n&&array[l]>array[max])
    {
        child[l].style.backgroundColor="yellow"
        if(run===false)
        {
            await pauseAnimation();
        }

        await sleep(10);
        child[l].style.backgroundColor="green"
        max=l;
    }
    if(r<n&&array[r]>array[max])
    {
        child[r].style.backgroundColor="red"
        if(run===false)
        {
            await pauseAnimation();
        }
        await sleep(10);
        child[r].style.backgroundColor="green"
        max=r;
    }
    if(max!=index)
    {
        let temp=array[max];
        array[max]=array[index];
        array[index]=temp;
        child[max].style.height=(array[max]*10)+"px";
        child[index].style.height=(array[index]*10)+"px";
        await maxHeap(max,n);
    }
}
async function heapSort()
{
    let n = array.length
    let child=area.childNodes;
    if(run===false)
        {
            await pauseAnimation();
        }
    for (let i = Math.floor(n / 2); i >= 0; i -= 1)      {
        await maxHeap( i,n)
      }
      await sleep(10);
    for (i = array.length - 1; i > 0; i--) {

        child[i].style.backgroundColor="blue"
        let temp=array[0];
        array[0]=array[i];
        array[i]=temp;
        child[0].style.height=(array[0]*10)+"px";
        child[i].style.height=(array[i]*10)+"px";
        
        n--
        await maxHeap( 0,n)
    }
    if(run===false)
        {
            await pauseAnimation();
        }
    child[0].style.backgroundColor="blue"
}

    



