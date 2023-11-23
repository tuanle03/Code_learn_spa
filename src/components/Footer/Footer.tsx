
import Logo from '../../components/Logo'
import './footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <Logo/>
            <div className = "about">
                <h3>Powered by Team 4</h3>
                <table>
                    <tr>
                        <td>NT208.O11.ATCL</td>
                    </tr>
                    <tr>
                        <td>Trường Đại học Công nghệ Thông tin - ĐHQG.HCM</td>
                    </tr>
                    <tr>
                        <td>University of Information Technology</td>
                    </tr>
                </table>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <table>
                    <tr>
                        <td>Lê Thị Huyền Trang</td>
                        <td>21522694</td>
                    </tr>
                    <tr>
                        <td>Huỳnh Hoa</td>
                        <td>21522080</td>
                    </tr>
                    <tr>
                        <td>Phạm Thái Bảo</td>
                        <td>21520156</td>
                    </tr>
                    <tr>
                        <td>Lê Thanh Tuấn</td>
                        <td>21520518</td>
                    </tr>
                </table>
            </div>
        </footer>
    )
}
export default Footer