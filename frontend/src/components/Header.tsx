
export default function Header() {
    return (
        <>
        <div className="bg-primary w-full flex flex-row justify-between py-2 fixed top-0">
            <img src="./images/logo.png" alt="logo" className="h-12" />
            <div className="w-fit relative -top-1">
                <div className="w-fit inline-block">
                    <img src="./images/currency.png" alt="currency" className="w-10 inline-block"/>
                    <span className="text-white w-fit inline-block relative top-1 -left-1">100</span>
                </div>
                <div className="w-fit inline-block">
                    <img src="./images/experience.png" alt="experience" className="w-10 inline-block"/>
                    <span className="text-white w-fit inline-block relative top-1">5</span>
                </div>
            <img 
            src="./images/avatar.png" 
            alt="avatar"
            className="h-12 rounded-full inline-block"
            />
            </div>
        </div>
        </>
    );
    
}