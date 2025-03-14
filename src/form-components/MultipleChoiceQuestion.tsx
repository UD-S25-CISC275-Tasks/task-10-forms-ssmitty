import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedchoice, setchoice] = useState<string>(options[0]);

    // This is the Control
    function updatec(event: React.ChangeEvent<HTMLSelectElement>) {
        setchoice(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="favoriteColors">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Select value={selectedchoice} onChange={updatec}>
                    {options.map((color: string) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selectedchoice === expectedAnswer ? "✔️" : "❌"}.
        </div>
    );
}
