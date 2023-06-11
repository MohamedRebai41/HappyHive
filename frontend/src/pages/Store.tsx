import Item from '../components/Item';
import { items } from '../data/ItemData';

export default function Store() {
    return (
        <>
       <div className="items-center justify-between bg-tertiary mt-16 mb-10 text-center">
        <div className='h-1/5 text-primary font-black text-4xl pt-5'>
                Store
            </div>
        <div className='grid grid-cols-2 gap-3 text-primary w-full rounded-md p-5 mt-5'>
            {items.map((item) => {
            return <Item key={item.id} item={item}></Item>;
            })}
        </div>
        </div>
        </>
    );
    }
