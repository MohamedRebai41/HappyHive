import ItemType from '../types/ItemType';
const Event: React.FC<{ item: Partial<ItemType> }> = ({
    item
    }) => {
        return (
            <div className='w-[90%] m-auto'>
                <div className='flex flex-col items-center mb-3 bg-white text-primary rounded-xl p-5'>
                    <h1 className='font-black m-1 text-center'>{item.name}</h1>
                    <img src='./images/item.jpg'className='h-16 w-16  m-1'/>
                    <span className='self-center m-1 bg-secondary w-full text-center rounded-full'>{item.price}</span>
                    <button className='w-full h-6 self-center m-1 cursor-pointer bg-tertiary rounded-full text-primary text-sm'>
                    Product Details
                    </button>
                </div>
            </div>
        );
    }
    
    export default Event;