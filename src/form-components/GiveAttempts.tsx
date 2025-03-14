import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [ival, setValue] = useState<string>("");
    const [left, setleft] = useState<number>(3);
    //const [fval, setfvalue] = useState<string>("");

    // This is the View
    return (
        <div>
            <Form.Group controlId="formMovieName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="number"
                    value={ival}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setValue(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setleft(left - 1);
                }}
                disabled={left === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    const newy = parseInt(ival) || 0;
                    setleft(newy + left);
                }}
            >
                gain
            </Button>
            {left}
        </div>
    );
}
