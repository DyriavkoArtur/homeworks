        function getData(url) {
          return $.ajax({
              url: url,
              dataType: 'json',
          });
      }
      getData('loged_users.json').then(function(loggedUsers) {
          var lastLoginUser = loggedUsers[loggedUsers.length - 1];

          console.log('Останній заходив на сайт:', lastLoginUser);

          var oldestLoginUser = loggedUsers[0];
          console.log('Найдавніший заходив на сайт:', oldestLoginUser);
      });

      getData('general_users.json').then(function(generalUsers) {
          var youngestUser = generalUsers.reduce(function(prev, curr) {
              return (prev.age < curr.age) ? prev : curr;
          });

          console.log('Наймолодший користувач:', youngestUser);

          var oldestUser = generalUsers.reduce(function(prev, curr) {
              return (prev.age > curr.age) ? prev : curr;
          });

          console.log('Найстарший користувач:', oldestUser);

          var totalAge = generalUsers.reduce(function(sum, user) {
              return sum + user.age;
          }, 0);

          var averageAge = Math.round(totalAge / generalUsers.length);
          console.log('Середній вік користувача:', averageAge);

          var closestToAverage = generalUsers.sort(function(a, b) {
              return Math.abs(a.age - averageAge) - Math.abs(b.age - averageAge);
          }).slice(0, 16);

          console.log('16 користувачів з віком, найближчим до середнього:', closestToAverage);

          var outputHtml = '';
          closestToAverage.forEach(function(user) {
              outputHtml += '<div>';
              outputHtml += '<img src="' + user.image + '" alt="avatar">';
              outputHtml += '<p>Ім\'я: ' + user.firstName + ' ' + user.lastName + '</p>';
              outputHtml += '<p>Телефон: ' + user.phone + '</p>';
              outputHtml += '<p>Пошта: ' + user.email + '</p>';
              outputHtml += '</div>';
          });

          $('#output').html(outputHtml);
      });