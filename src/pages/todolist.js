export const Todolist = ({ i,onDelete,onChange, }) => {

    return (

        <div className="chek-butt">
            <div className="label"><label className={`list ${i.check ? "check" : ""}`}> {i.name}</label></div>

            <div> 
                <input  checked={i.check} onChange={(e)=>{
                    onChange({
                        ...i,check:e.target.checked
                    })
                }} className='checkbox ' type="checkbox" />
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZO7jVpy7YL0_0RHfNp0qhjRyJwB8eZIrCa0ZUvGOp01XJM-sHIuC4PwXcEBJD40SdQU&usqp=CAU" alt="icon"/>
                <img onClick={(()=>{
                    onDelete(i)
                })} src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png" alt="icon" />
                </div>

        </div>


    )
}