import { useState } from "react";

export const Nav = () => {
    const [value, set] = useState(0);
    return (
        <nav>  
            <button onClick={ () => set((prev) => prev + 1) }>버튼</button>
            {value}
        </nav>
    )
}