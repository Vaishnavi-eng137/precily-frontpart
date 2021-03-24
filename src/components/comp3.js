import React,{useState} from "react";
import axios from "axios";
import { Resizable, ResizableBox } from "react-resizable";

function Comp3() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  function addData() {
    let tempData = {
      id: id,
      name: name,
      email: email,
    };
    axios
      .post("http://localhost:8080/comp3/add", tempData, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then(() => {
        console.log("hello");
      })
      .catch(() => {
        console.log("something went wrong");
      });
  }

  function updateData() {
    let tempData = {
      id: id,
      name: name,
      email: email,
    };
    axios
      .patch("http://localhost:8080/comp3/update", tempData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("hello");
      })
      .catch(() => {
        console.log("something went wrong");
      });
  }

  return (
    <div>
    <ResizableBox
      width={1600}
      height={300}
      handle={<i className="fa fa-car"></i>}
      resizeHandles={["se"]}
      className="container"
    >
      <div style={{ color: "black" }}>
        <h1>
          <b>Window-3</b>
        </h1>
        <form>
          <div className="form-group">
            <div style={{margin:'4px'}}>
            <label>Your ID no.</label>
              <input type="number" className="form-control"value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}></input>
            </div>
            <div style={{margin:'4px'}}>
            <label>Your Email</label>
              <input type="email" className="form-control"value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}></input>
            </div>
            <div style={{margin:'4px'}}>
            <label>Your Name</label>
              <input type="text" className="form-control"value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}></input>
            </div>
          </div>
        </form>
        <div className="content">
          <button type="button" className="btn btn-success"onClick={addData}>
            Add
          </button>
          <button type="button" className="btn btn-danger"onClick={updateData}>
            Update
          </button>
        </div>
      </div>
    </ResizableBox>
    </div>
  );
}

export default Comp3;
