import { useState } from 'react';
import { ChromePicker } from 'react-color'

const ColorPicker = () => {
    // States
        // Picked Color
        const [color, setColor] = useState('#F6A4A4');

        // Color Picker Visibility
        const [picker, setPicker] = useState(false);

    // Style Variables
        // Span Rectangle
        const cpRectangle = {
            backgroundColor: color,
            width: '35px',
            height: '20px',
            display: 'block'
        }

        // Button
        const cpButton = {
            position: 'relative',
        }

        // Color Picker Container
        const cpContainer = {
            position: 'absolute',
            zIndex: 2
        }

        // Website's Background
        const cpMainBackground = {
            backgroundColor: color
        }

    return (
            <main style={cpMainBackground} className="vh-100 d-flex justify-content-center align-items-center">
                <div className="px-5 py-4 bg-white rounded-3">
                    <h1>Color Picker</h1>
                    <form>
                        {/* Button that opens color picker */}
                        <button style={cpButton} type="button" onClick={() => picker ? setPicker(false) : setPicker(true)} className="btn btn-light me-4">
                            {/* Tiny rectangle that renders current color */}
                            <span style={cpRectangle}></span>
                        </button>

                        {/* Render Color Picker */}
                        {picker ? (
                            <div style={cpContainer} >
                                <ChromePicker color={color} onChangeComplete={(color) => { setColor(color.hex) }} />
                            </div>) : ""}

                        {/* Input Displaying chosen color */}
                        <input type="text" value={color}></input>
                    </form>
                </div>
            </main>
    );
}

export default ColorPicker;