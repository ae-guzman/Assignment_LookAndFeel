var app = new function() {
    this.el = document.getElementById('trips');
  
    this.trips = [];
  
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.trips.length > 0) {
        for (i = 0; i < this.trips.length; i++) {
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.trips[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.trips.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-trip');
      var trip = el.value;
  
      if (trip) {
        this.trips.push(trip.trim());
        el.value = '';
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-trip');
      el.value = this.trips[item];
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
        var trip = el.value;
  
        if (trip) {
          self.trips.splice(item, 1, trip.trim());
          self.FetchAll();
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      this.trips.splice(item, 1);
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Trips';
  
      if (data) {
          if(data ==1){
              name = 'Trip'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = 'No ' + name;
      }
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }