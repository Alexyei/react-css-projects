## Свойства контейнера:
### display
Значения: flex, inline-flex;
Описание: определяет элемент как блочный flex-контейнер или как строчный flex-контейнер.
### flex-direction
Значения: row, row-reverse, column, column-reverse.
Значение по-умолчанию: row;
Описание: определяет направление основной оси, по данному направлению располагаются друг за другом flex-элементы.
### flex-wrap
Значения: wrap, wrap-reverse, nowrap.
Значение по-умолчанию: nowrap;
Описание: определяет возможность и способ переноса flex-элементов на новые строки или колонки при нехватке места в строке или столбце.
### flex-flow
Значение по-умолчанию: row nowrap;
Описание: является сокращенной записью свойств flex-direction и flex-wrap.
### justify-content
Значения: flex-start, flex-end, center, space-between, space-around, apace-evently.
Значение по-умолчанию: flex-start;
Описание: выравнивание элементов по основной оси.
### align-items
Значения: flex-start, flex-end, center, baseline, stretch.
Значение по-умолчанию: stretch;
Описание: выравнивание элементов в строке или колонке по побочной оси.
Примечание: если flex-direction == column или column-reverse, то (align-items = baseline) == (align-items = flex-start)
### align-content
Значения: flex-start, flex-end, center, space-between, space-around, apace-evently, stretch.
Значение по-умолчанию: stretch;
Описание: выравниевание строк или колонок элементов по побочной оси.
Примечание: данное свойство действует только если flex-wrap == wrap или wrap-reverse.


## Свойства flex-элементов:
### order
Значения: целые числа
Значение по-умолчанию: 0;
Описание: позволяет изменить порядок конкретных элементов в строке или столбце.
### align-self
Значения: flex-start, flex-end, center, baseline, stretch.
Значение по-умолчанию: stretch;
Описание: позволяет изменить выравнивание для конкретных элементов по побочной оси.
margin-left: auto, margin-right: auto, margin-top: auto, margin-bottom: auto, margin: auto;
Описание: позволяет изменить выравнивание для конкретных элементов по главной оси.
### flex-grow
Значения: неотрицательные числа
Значение по-умолчанию: 0;
Описание: если flex-grow == 0, то flex-элемент не увеличивается если есть свободное место; если flex-grow == n, то flex-элемент увеличивается если есть свободное место в соответствии с пропорцией n.
### flex-shrink
Значения: неотрицательные числа
Значение по-умолчанию: 1;
Описание: если flex-shrink== 0, то flex-элемент не сужается если ему нехватает пространства; если flex-shrink == n, то flex-элемент сужается если ему нехватает пространства в соответствии с пропорцией n.
### flex-basis
Значения: width-value (или height-value), content, auto;
Значение по-умолчанию: auto;
Описание: если flex-basis == auto, то flex-basis = width flex-элемента или height flex-элемента, flex-basis == content, то flex-basis = width flex-элемента или height flex-элемента, при этом width flex-элемента или height flex-элемента = auto.
### flex
Значение по-умолчанию: 0 1 auto (однако flex: 2; == flex-grow: 2;flex-shrink: 1;flex-basis: 0%; );
Описание: является сокращенной записью свойств flex-grow, flex-shrink и flex-basis.

	








