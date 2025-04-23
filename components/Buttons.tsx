"use client"

import { sendGAEvent } from "@next/third-parties/google"


const Buttons = () => {
    function handleAddToCart() {
        console.log("Add to Cart button clicked")
        sendGAEvent('event', 'add_to_cart_btn', { value: { id: 1, name: "abc" } })
    }

    function handleBuyNow() {
        console.log("Buy Now button clicked")
        sendGAEvent('event', 'buy_now_btn', { value: { id: 1, name: "abc" } })
    }

    return (
        <div className="flex items-center gap-4 mt-12">
            <button onClick={handleAddToCart} className="bg-blue-500 cursor-pointer text-white font-bold py-2 px-4 rounded">
                Add to Cart
            </button>
            <button onClick={handleBuyNow} className="bg-green-500 cursor-pointer text-white font-bold py-2 px-4 rounded">
                Buy Now
            </button>
        </div>
    )
}

export default Buttons