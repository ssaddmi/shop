import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import './index.css';
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Converse x Topo Chico T-Shirt', 
          img: '1.jpg',
          desc: 'Освежающий взгляд на классический стиль Converse: мексиканский художник Marka27 привносит культовую аутентичность Topo Chico в новую коллекцию икон и одежды, включая эту футболку, выпущенную ограниченным тиражом. Яркий дизайн включает яркий коллажный принт на спине и цветочный рисунок спереди, прославляющий вневременную минеральную воду из Мексики, которая теперь любима во всем мире.',
          category: 'top',
          price: '4000',
          descshort: 'Converse прославляет вневременную минеральную воду из Мексики выпуском футболки ограниченного выпуска.'
        },
        {
          id: 2,
          title: 'Converse x Dungeon & Dragons', 
          img: '1.jpg',
          desc: 'Приветствую всех искателей приключений! Converse отмечает 50-летие Dungeons & Dragons выпуском кепки дальнобойщика ограниченной серии, которая сочетает в себе классический стиль и эпическое приключение легендарной ролевой игры. Уникальный дизайн включает в себя культовую иллюстрацию с обложки Advanced Dungeons & Dragons Player`s Handbook™.',
          category: 'accessories',
          price: '3500',
          descshort: 'Празднование 50-летия Dungeons & Dragons с кепкой дальнобойщика Converse ограниченного выпуска.'
        },
        {
          id: 3,
          title: 'Chuck 70', 
          img: '1.jpg',
          desc: 'Chuck 70 предлагает вам чистый холст, на котором вы можете рассказать свои собственные истории — через стиль или деятельность. Кроме того, благодаря своему проверенному дизайну они напоминают о том, с чего все началось, а обновления современного комфорта переносят ваш взгляд в настоящее.',
          category: 'shoes',
          price: '9000',
          descshort: 'Холст для любой эпохи стиля, в которой вы находитесь.'
        },
        {
          id: 4,
          title: 'Converse x Dungeon & Dragons', 
          img: '1.jpg',
          desc: 'Converse отмечает 50-летие Dungeons & Dragons выпуском ограниченной серии шорт, сочетающих классический стиль с эпическими приключениями легендарной ролевой игры. ',
          category: 'bottom',
          price: '6000',
          descshort: 'Отмечаем 50-летие Dungeons & Dragons выпуском ограниченной серии шорт Converse.'
        },
        {
          id: 5,
          title: 'Cons Mushroom Cottage Trucker Hat', 
          img: '1.jpg',
          desc: 'Найдите время, чтобы отдохнуть на свежем воздухе, и возьмите с собой эту кепку. Полиэстер и сетка обеспечивают прочную и удобную посадку. Кроме того, графика грибов позволит вам погрузиться в причуды природы во время ваших приключений.',
          category: 'accessories',
          price: '3000',
          descshort: 'Этот головной убор привнесет пикантность в ваш летний образ.'
        },
        {
          id: 6,
          title: 'Converse x A-COLD-WALL*', 
          img: '1.jpg',
          desc: 'A-COLD-WALL* представляет собой новую интерпретацию классической спортивной одежды — брюк-ветровок — с мятой атласной нейлоновой отделкой и провокационными деталями. Двусторонние брюки Converse x A-COLD-WALL* Gale выполнены в кремнево-сером цвете с одной стороны и ржавом цвете с другой.',
          category: 'bottom',
          price: '12000',
          descshort: 'Ветряные брюки ограниченной серии с авангардной эстетикой будущего A-COLD-WALL*'
        },
        {
          id: 7,
          title: 'Chase The Sun', 
          img: '1.jpg',
          desc: 'Эти закругленные солнцезащитные очки имеют неподвластный времени дизайн каплевидного выреза и изящный фирменный знак по бокам. Фирменный логотип Star Chevron на дужках сохраняет классический вид.',
          category: 'accessories',
          price: '5500',
          descshort: 'Свежие цвета придают этим эффектным солнцезащитным очкам ослепляющий стиль.'
        },
        {
          id: 8,
          title: 'Converse x Dungeon & Dragons', 
          img: '1.jpg',
          desc: 'Приветствую всех искателей приключений! Converse отмечает 50-летие Dungeons & Dragons выпуском ограниченной серии футболок с изображением одного из самых печально известных зверей: злого зеленого дракона Cyan Bloodbane. В дизайне графика, выполненная резиновыми чернилами, сочетается с уникальными деталями и надписью, посвященной 50-летию.',
          category: 'accessories',
          price: '4000',
          descshort: 'Отмечаем 50-летие легендарной ролевой игры выпуском футболки ограниченного выпуска.'
        },
        {
          id: 9,
          title: 'Converse x Dungeon & Dragons', 
          img: '1.jpg',
          desc: 'Приветствую всех искателей приключений! Converse отмечает 50-летие Dungeons & Dragons выпуском лимитированной коллекции френч-терри с круглым вырезом, сочетающей классический стиль с приключениями D&D. Большая графика D&D, выполненная резиновыми чернилами, дополнена нестандартными деталями и надписью, посвященной 50-летию игры.',
          category: 'top',
          price: '7500',
          descshort: 'Празднование 50-летия Dungeons & Dragons с круглым вырезом ограниченной серии.'
        },
        {
          id: 10,
          title: 'Cons x Patta', 
          img: '1.jpg',
          desc: 'Converse объединились с законодателями вкуса из Амстердама для создания футболки премиум-класса, выпущенной ограниченным тиражом, с градиентным принтом по всей поверхности, практичными светоотражающими деталями и смелым кобрендингом, подчеркивающим сотрудничество.',
          category: 'top',
          price: '6000',
          descshort: 'Converse и Patta из Амстердама создали коллекцию в утилитарном стиле.'
        },
        {
          id: 11,
          title: 'Run Star Legacy Chelsea CX', 
          img: '1.jpg',
          desc: 'RSL Chelsea Boot CX — это эволюция любимых фанатами Run Star Hike, сочетающая в себе смелый дизайн платформы с превосходным комфортом и легкой доступностью. Легкая межподошва CX и стелька обеспечивают легкость ногам, а искаженные элементы дизайна Chuck Taylor заставляют их гадать. Это роскошное издание оригинала сочетает монохромный верх из натуральной кожи с эластичным воротником и застежкой-молнией для повседневной универсальности.',
          category: 'shoes',
          price: '13000',
          descshort: 'Сверхудобная и футуристическая платформа возвращается в удобном монохромном дизайне из натуральной кожи.'
        }, 
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this) //добавляем возможность взаимодействовать с состояниями в addToOrder
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.deleteOrderAll = this.deleteOrderAll.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)


  }
  render() {
    console.log('Current Orders:', this.state.orders);
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} onDeleteAllQuantity={this.deleteOrderAll} onAdd={this.addToOrder} changeQuantity={this.changeQuantity}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Footer />  
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }


  chooseCategory(category){
  if(category === 'all'){
    this.setState({currentItems: this.state.items})
    return
  }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category )
    })
  }

  changeQuantity(id, newQuantity) {
    this.setState(prevState => {
      const updatedOrders = prevState.orders.map(order => {
        if (order.id === id) {
          return { ...order, quantity: newQuantity };
        }
        return order;
      });
      return { orders: updatedOrders };
    });
  }
  


  deleteOrder(id) {
    this.setState(prevState => {
      const orders = prevState.orders.map(order => {
        if (order.id === id) {
          if (order.quantity > 1) {
            return { ...order, quantity: order.quantity -= 1 };
          } else {
            return null;
          }
        }
        return order;
      }).filter(order => order !== null);
      return { orders };
    });
  }

  deleteOrderAll(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    
  }

  addToOrder(item) {
    this.setState(prevState => {
      const orderIndex = prevState.orders.findIndex(order => order.id === item.id);
  
      if (orderIndex >= 0) {
        const orders = [...prevState.orders];
        orders[orderIndex] = { ...orders[orderIndex], quantity: orders[orderIndex].quantity + 1 };
        return { orders };
      } else {
        return { orders: [...prevState.orders, { ...item, quantity: 1 }] };
      }
    });
  }
  
  
}


export default App;
