
  var target = document.getElementById('target');
      console.log( target );

  var newDivNode = document.createElement('div');
      // Задаем множественный класс
      newDivNode.className = 'class1 class2 class3 class class5';
      newDivNode.classList.add('newClassToggle');

      newDivNode.classList.toggle('newClassToggle');

      // Проверяем наличие класса у блока
      // newDivNode.classList.contains("class") // false
      // newDivNode.classList.add('StoreClass');
      // newDivNode.classList.remove('class2');
      // newDivNode.classList.toggle('class1')

      /*

        1. Выбрать блок Target и добавить его на страничку
        2. Воздать див внутри этого блока
        3. Добавить ему 3 класса "Ctrl Shift Delete"
           Через метод className
        4. Добавиь класс через метод add
        5. Удалить класс "Delete"
        6. Применить метод toggle на класс "Command"

      */

        target.appendChild(newDivNode);

      // console.log( newDivNode.classList);

      //
      // var ul = document.createElement('ul');
      // var liArray = ['Game of Thrones', 'Dexter', 'Mr.Robot', 'Fargo', 'Stranger Things'];
      // document.body.appendChild(ul); // сначала в документ
      //
      // for (i = 0; i < liArray.length; i++) {
      //   var li = document.createElement('li');
      //       li.innerText = liArray[i]
      //       ul.appendChild( li );
      // }
      // liArray.forEach( function( item ){
      //     var li = document.createElement('li');
      //         li.innerText = item
      //         ul.appendChild( li );
      // });

      // var computedStyle = getComputedStyle(document.body, '');
      // console.log(computedStyle);

      // Немного ивентов
      zButton = document.getElementById('button');
      zButton.onclick = function(event) {
        var Popup = document.getElementById('window');
            // console.time('classToggle');
            Popup.classList.toggle('show');
            // console.timeEnd('classToggle');
        //                              lassToggle: 0.0810546875ms
        // console.time('classList'); // classList: 0.119873046875ms
        // if( Popup.classList.contains("hide")){
        //   Popup.classList.remove('hide');
        //   Popup.classList.add('show');
        //   console.timeEnd('classList');
        // } else {
        //   Popup.classList.remove('show');
        //   Popup.classList.add('hide');
        //   console.timeEnd('classList');
        // }



      };
