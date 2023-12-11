// import react from react:
export default function MainPage(){

function handleflowers(){
    console.log("flowers")
}    
function handleTrees(){
    console.log("Trees")

}
function handleCars(){
    console.log("Cars")

}

    return(
        <>

<h1> name : kiana </h1>
<h2> studentNumber : 2230954 </h2>


<button onclick={handleflowers}>
    Flowers
</button>
<button onclick={handleCars}>

    Cars
    
</button>

<button onclick={handleTrees}>

    Treese
    
</button>


        </>
    )

}