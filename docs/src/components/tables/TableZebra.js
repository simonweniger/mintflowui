import React from "react";

function TableZebra() {
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th></th> 
            <th>Name</th> 
            <th>Job</th> 
            <th>Favorite Color</th>
          </tr>
        </thead> 
        <tbody>
          <tr>
            <th>6</th> 
            <td>Irma Vasilik</td> 
            <td>Editor</td> 
            <td>Purple</td>
          </tr>
          <tr>
            <th>7</th> 
            <td>Meghann Durtnal</td> 
            <td>Staff Accountant IV</td> 
            <td>Yellow</td>
          </tr>
          <tr>
            <th>8</th> 
            <td>Sammy Seston</td> 
            <td>Accountant I</td> 
            <td>Crimson</td>
          </tr>
          <tr>
            <th>9</th> 
            <td>Lesya Tinham</td> 
            <td>Safety Technician IV</td> 
            <td>Maroon</td>
          </tr>
          <tr>
            <th>10</th> 
            <td>Zaneta Tewkesbury</td> 
            <td>VP Marketing</td> 
            <td>Green</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}
                
export default TableZebra;