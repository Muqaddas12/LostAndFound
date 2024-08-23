



function smsg() {
    document.getElementById("msg").innerHTML = "Submitted Successfully";
  }



  function LostForm() {
    document.getElementById(
      "dlostform"
    ).innerHTML = `<h2 style="margin: 0px 100px;">Losted Item Report Form</h2>
    <label>ItemName</label>
    <input name="Name" type="text" placeholder="Type Here" required>
    <label>YourName</label>
    <input name="Pname" type="text" placeholder="Enter your name" required>
    <label>Description</label>
    <input name="Description" type="text" width="400px"height="400px" required>
    <label>Place</label>
    <input name="Place1" type="text" placeholder="Any Idea Where you Lost?" required>
    <label>Mobile Number</label>
    <input name="mno" type="text" placeholder="Enter Mobile Number" required>
    <label for="">Add Image</label>
    <input name="img" type="file" accept="img/*" required>
    <button name="lost" id="submit" onclick="smsg()">Submit</button>
    <label id="msg"></label>`;
  }



  function FoundForm() {
    document.getElementById(
      "dlostform"
    ).innerHTML = `<h2 style="margin: 0px 100px;">Founded Item Report Form</h2>
    <label>ItemName</label>
    <input name="Name" type="text" placeholder="Type Here" required>
    <label>Description</label>
    <input name="Description" type="text" width="400px"height="400px" required>
    <label>Place</label>
    <input name="Place" type="text" placeholder="Type Here" required>
    <label>Sumbited By</label>
    <input name="Status" type="text" placeholder="Type Here" required>
    <label>Mobile Number</label>
    <input name="mno" type="text" placeholder="Type Here" required>
    <label for="">Add Image</label>
    <input name="img" type="file" accept="img/*" required>
    <button name="found" id="submit" onclick="smsg()">Submit</button>
    <label id="msg"></label>`;
  }