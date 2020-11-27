const dom = document.querySelectorAll('movie-poster')
const imgOut = {
                    width: "100%",
                    height: "500px",
                    position: "relative",
                    backgroundColor:'white',
                    opacity:'1',
                    margin:'auto',
                    }
const imgDetail = {
                    width: "100%",
                    height: "500px",
                    position: "relative",
                    backgroundColor:'white',
                    opacity:'1',
                    margin:'auto',
                    clipPath:"polygon(0 0, 65% 0, 46% 100%, 0 100%)"
                  
                    }
const btnstyle = {position:"absolute",top:"70%", left:"10%", width:"200px", color:"#34b4eb", height:"50" }
const btnDatve = {color:"#34b4eb", width:"400px", position:"absolute", top:"60%", right:"5%" }
const rectTan = {width:"100%", height:"500px", backgroundColor:"red"}
export default class MoviePoster extends React.Component {
    constructor(props) {
        super(props)
        this.style = {
            frame: {
                width: "100%",
                height: "500px",
                position: "relative",
                backgroundColor:'white',
                opacity:'1',
                margin:'auto',
            },
            fade: {
                height: "100%",
                opacity:'1.2',
                width: "100%",
                position:"absolute",
                background: "-webkit-linear-gradient(left, rgba(0,0,0,1.2) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100% ) "
                
            }
        }
    }
    render() {
        // const outsideView = (   
        //             <span >
        //                 <img style={imstyleOut} className="responsive" src={this.props.template.querySelector('img#phim_anhbia').src}></img>
                       
        //             </span>
        //             )

        // const detailView = (
        //             <span>
        //                 <img style={imstyleDe} className="responsive" src={this.props.template.querySelector('img#phim_anhbia').src}></img>
        //                 <h1>Ten phim: {this.props.template.querySelector('#phim_ten').innerHTML}</h1>
        //             </span>
        // )
        return(
            <div >
               
                <div style={!this.props.detail?imgOut:imgDetail} >
                    <div style={this.style.fade}></div>
                    <img className={"h-100 w-100 d-block border border-secondary"} src={this.props.template.querySelector('img#phim_anhbia').src}></img>
                    { !this.props.detail && 
                    <div>
                        <button className="btn btn-outline-primary rounded-pill" style={btnstyle} onClick={()=>{window.location.href='./phim/'+ this.props.template.id}}><p style={{color:"white", margin:"auto"}}>Xem chi tiet</p></button>
                    </div> 
                    }
                </div>
                <div>
                { this.props.detail &&
                    <div  style={{color:'#FFF8DC', fontStyle:'italic',position:"absolute", top:"20%", right:"10%"}}>
                        <h2  style={{fontWeight:'bold'}}><span>{this.props.template.querySelector('#phim_ten').innerHTML}</span></h2>
                        <p>Tom Tat: <br></br>{this.props.template.querySelector('#phim_mieuta').innerHTML}</p>
                        <p>Thoi Luong: {this.props.template.querySelector('#phim_thoiluong').innerHTML}p</p>
                        <p>Ngay Chieu: {this.props.template.querySelector('#phim_ngaychieu').innerHTML}</p>
                    </div> 
                    
                }</div>
                <div>
                    {this.props.detail && 
                    <buton className='btn btn-outline-primary ' data-toggle="modal" data-target="#ticket-buy" style={btnDatve}><p style={{color:"white", margin:"auto"}}>Dat ve</p></buton>}
                </div>
                
               
            </div>
        )
    }
}
