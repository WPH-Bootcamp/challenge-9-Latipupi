const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white p-10">
            <div className="flex md:flex-row md:justify-between flex-col">
                <div className="mb-6">
                    <div className="flex gap-2 items-center mb-2">
                        <img src="/logo-fotter.svg" alt="Foody Logo" width={50} height={50} />
                        <h3 className="text-2xl">Foody</h3>
                    </div>
                    <p className="text-xs leading-6 md:w-70">Enjoy homemade flavors & chef’s signature dishes, freshly prepared every day. Order online or visit our nearest branch.</p>

                    <h3 className="font-bold mt-4 mb-4">Follow on Social Media</h3>
                    <div className="flex gap-4 mt-2">
                        <img src="/facebook.svg" alt="Facebook" width={40} height={40} />
                        <img src="/ig.svg" alt="Instagram" width={40} height={40} />
                        <img src="/linkind.svg" alt="LinkedIn" width={40} height={40} />
                        <img src="/tiktok.svg" alt="Twitter" width={40} height={40} />
                    </div>
                </div>
                <div className="space-y-4 md:block hidden">
                    <h4 className="font-semibold">Explore</h4>
                    <ul className="space-y-4">
                        <li>All Food</li>
                        <li>Nearby</li>
                        <li>Discount</li>
                        <li>Best Seller</li>
                        <li>Delivery</li>
                        <li>Lunch</li>
                    </ul>
                </div>
                <div className="space-y-4 md:block hidden">
                    <h4 className="font-semibold">Help</h4>
                    <ul className="space-y-4">
                        <li>How to Order</li>
                        <li>Payment Methods</li>
                        <li>Track My Order</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 md:hidden">
                    <div className="space-y-4">
                        <h4 className="font-semibold">Explore</h4>
                        <ul className="space-y-4">
                            <li>All Food</li>
                            <li>Nearby</li>
                            <li>Discount</li>
                            <li>Best Seller</li>
                            <li>Delivery</li>
                            <li>Lunch</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold">Help</h4>
                        <ul className="space-y-4">
                            <li>How to Order</li>
                            <li>Payment Methods</li>
                            <li>Track My Order</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;