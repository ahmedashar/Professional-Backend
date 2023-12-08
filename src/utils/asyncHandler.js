
// const asyncHandler = ()=>{} 
// const asyncHandler = (func)=>{} 
// const asyncHandler = (func)=> async ()=>{} --> const asyncHandler = (funct)=> { ()=> {} } 


const asyncHandler2 = (requestHandler) =>{

    
}

// using try catch
const asyncHandler = (fn) => async (req, res , next)=>{
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })    
    }
}

export {asyncHandler}