import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import Form from "react-bootstrap/esm/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [val, setValue] = useState<string>("");
    const [fed, setfed] = useState<string>("❌");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        const newy = event.target.value;
        setValue(newy);
        if (expectedAnswer === newy) {
            setfed("✔️");
        } else {
            setfed("❌");
        }
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="formMovieName">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={val} onChange={updateName} />
                <span>{fed}</span>
            </Form.Group>
            <div></div>
        </div>
    );
}
