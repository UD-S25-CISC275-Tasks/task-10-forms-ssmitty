import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [switched, setswitched] = useState<boolean>(false);
    const [namey, setsname] = useState<string>("Your Name");
    const [student, setstudent] = useState<boolean>(true);

    return (
        <div>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={switched}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setswitched(event.target.checked);
                }}
            />
            <div>
                {switched ?
                    <div>
                        <Form.Group controlId="formMovieReleased">
                            <Form.Control
                                type="text"
                                value={namey}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setsname(event.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="student">
                            <Form.Check
                                type="checkbox"
                                id="student-checkbox"
                                label="student"
                                checked={student}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setstudent(event.target.checked);
                                }}
                            />
                        </Form.Group>
                    </div>
                :   <p>
                        {namey} {student ? " is" : " is not"} a student.
                    </p>
                }
            </div>
        </div>
    );
}
