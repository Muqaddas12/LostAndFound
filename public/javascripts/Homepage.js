document.querySelectorAll('.main-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.value == 'FoundItem') {
      document.getElementById(
        'right-content'
      ).innerHTML = `     <form id="fl-content" action="su" method="post">
                    <label id="form-title" for="title">
                        Founded item
                    </label>
                   <br>
            <label class="form-label" for="name">YourName*</label><br>
            <input class="data-get" type="text" name="name" id="name" placeholder="Enter Your Name" required><br>
            <label class="form-label" for="item-name">item name*</label><br>
            <input class="data-get" type="text" name="itemname" placeholder="Enter the item name" required><br>
            <label class="form-label" for="address">Discription</label><br>
            <input class="data-get" type="text" name="adress" placeholder="Discription"><br>
            <label class="form-label" for="mobile">
                Mobile Number*
            </label><br>
            
            <input class="data-get" type="tel" placeholder="Enter your mobile number" required><br>
            <label for="place" class="form-label">Place</label><br>
            <input type="text" name="place" class="data-get" placeholder="Enter where you find the item"><br>
            <label class="form-label" for="image">Item Image*</label><br>
            <input type="file" name="file" class="data-get" accept="image/*" required><br>
            
            <input type="submit" id="response">

        </form>`
    } else if (button.value == 'LostItem') {
      document.getElementById(
        'right-content'
      ).innerHTML = ` <form id="fl-content" action="su" method="post">
          <label id="form-title" for="title">LostedItems </label>
          <br />
          
          <label class="form-label" for="item-name">item name*</label><br />
          <input
            class="data-get"
            type="text"
            name="itemname"
            placeholder="Enter the item name"
            required
          /><br />
          <label class="form-label" for="address">Item details*</label><br />
          <input
            class="data-get"
            type="text"
            name="adress"
            placeholder="Enter the item details"
            required
          /><br />
          <label class="form-label" for="mobile"> Mobile Number* </label><br />

          <input
            class="data-get"
            type="tel"
            placeholder="Enter your mobile number"
            required
          /><br />
          <label for="place" class="form-label">Place</label><br />
          <input
            type="text"
            name="place"
            class="data-get"
            placeholder="Where you lost the item?"
          /><br />
          <label class="form-label" for="image">Item Image*</label><br />
          <input
            type="file"
            name="file"
            class="data-get"
            accept="image/*"
            required
          /><br />

          <input type="submit" id="response" />
        </form>`
    }
  })
})
