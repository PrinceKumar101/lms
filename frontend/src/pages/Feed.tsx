const Feed = ()=>{
    return (
        <>
        <div className=" card">
            <h1>Hello Card</h1>
            <p>Feed</p>
        </div>
        <div className=" w-full flex justify-center items-center gap-2 mt-5 ">
            <input type="checkbox" name="feed" id="feed" className="size-4 accent-fuck/60" />
            <label htmlFor="feed" className="text-xl">Check box color </label>
        </div>
        <div className="w-full">
            <p className=" text-[min(10vw,700px)]">Something fluid Text</p>
            <p className=" w-full text-[min(9vw,700px)] text-fuck text-shadow-lg text-shadow-fuck/20">Next something fluid</p>
        </div>
        <div className=" mt-10">
            <input type="file" className=" rounded-2xl text-xl file:font-bold file:bg-fuck file:text-white file:py-2 file:px-4 file:rounded-full text-fuck p-2" />
        </div>
        <div className=" card">
            <h1 className="font-bold text-2xl text-center">
                Don't know man
            </h1>
                <details className=" open:ring-1 open:ring-fuck/50 open:bg-fuck/10 open:text-green-500 text-fuck ">
                    <summary className=" font-bold ">Hey you opened me</summary>
                    <p className="">Some hidden content</p>
                </details>

        </div>
        <div className="card">
            <textarea name="" id="" placeholder="Type Something" className=" caret-fuck focus:outline-none focus:border-none border-2 border-fuck p-2  focus:ring-1 focus:ring-fuck"></textarea>
        </div>

        <div className="card-new">
            <h1>New Card</h1>
            <p>This is a new card component.</p>

        </div>
        </>
    )
}
export default Feed