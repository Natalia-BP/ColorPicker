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
        width: '29px',
        height: '15px',
        display: 'block'
    }

    // Color Picker Container
    const cpContainer = {
        zIndex: 3,
        top: '30px',
        left: '0px'
    }

    // Website's Background
    const cpMainBackground = {
        transition: 'all ease 0.5s',
        backgroundColor: color
    }

    return (
        <main style={cpMainBackground} className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="m-3 p-3 px-md-5 py-md-4 bg-white rounded-3">
                <h1>Color Picker</h1>
                <form>


                    

                    {/* Input Displaying chosen color */}
                    <div className="input-group input-group-sm mb-3">

                        <span className="input-group-text position-relative">
                            {/* Button that opens color picker */}
                            <button type="button" onClick={() => picker ? setPicker(false) : setPicker(true)} className="btn p-0">
                                {/* Tiny rectangle that renders current color */}
                                <span style={cpRectangle}></span>
                            </button>

                            {/* Render Color Picker */}
                    {picker ? (
                        <div className="position-absolute" style={cpContainer} >
                            <ChromePicker color={color} onChangeComplete={(color) => { setColor(color.hex) }} />
                        </div>) : ""}
                        </span>
                        <input type="text" className="form-control" value={color}></input>
                    </div>

                </form>
            </div>
        </main>
    );
}

export default ColorPicker;