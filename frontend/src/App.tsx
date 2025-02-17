const App = () => {


    return (
        <div className="bg-black h-screen px-12 py-8">
            <div className="bg-white h-full rounded-xl grid md:grid-cols-2 p-2">
                <div className="hidden md:block bg-green-50">
                    <div className="bg-blue-50 h-full pt-20">
                        <img alt="logo" src="/logo.svg" className="h-[165px] w-[120px] m-auto" />
                        <h1 className="text-center font-grotesque font-bold text-8xl">Edu Share</h1>
                        <h3 className="font-grotesque font-medium text-4xl text-center pt-10">
                            Unlock your potential with Shared Knowledge
                        </h3>
                    </div>
                </div>
                <div className="bg-red-50 p-20 flex justify-center">
                    <div className="bg-green-100 h-full rounded-xl p-2 w-[450px]">
                        <h1 className="font-poppins font-medium text-4xl text-center">Login</h1>
                    </div>
                </div>
            </div>
        </div>
    );
    /*    return (
            <div className="bg-black h-screen px-12 py-8">
                <div className="bg-white h-full rounded-xl grid md:grid-cols-2 p-2">
                    <div className="max-md:hidden bg-green-50 ">
                        <div className="bg-blue-50 h-full pt-20">
                            <img alt="logo" src="/logo.svg" className="h-[165px] w-[120px] m-auto " />
                            <h1 className="text-center font-grotesque font-bold text-8xl">Edu Share</h1>
                            <h3 className="font-grotesque font-medium text-4xl text-center pt-10">Unlock your potential with Shared Knowledge</h3>
                        </div>
                    </div>
                    <div className="bg-red-50 p-20 flex justify-center">
                       <div className="bg-green-100 h-full rounded-xl p-2 w-[450px]">
                            <h1 className="font-poppins font-medium text-4xl text-center">Login</h1>
                        </div> 
                    </div>
                </div>
            </div>
        );*/


};

export default App;
