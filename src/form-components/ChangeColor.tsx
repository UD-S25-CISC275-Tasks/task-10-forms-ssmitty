import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const Colors =['red','yellow','green','blue','orange','pink','purple','white']
    const [response, setResponse] = useState<string>(Colors[0]);

    return (
        <div>
            {Colors.map((col: string) => (
                <Form.Check
                    key={col}
                    inline
                    type="radio"
                    name="Apple"
                    onChange={() => {
                        setResponse(col);
                    }}
                    id="response-good"
                    label={col}
                    value={col}
                    checked={col === response}
                />
            ))}
            <div>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: response }}
                >
                    {response}
                </span>
            </div>
        </div>
    );
}
