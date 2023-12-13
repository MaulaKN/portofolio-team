import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TeamCard } from "./TeamCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import profil from "../assets/img/profil.png";

export const Team = () => {
    const card = [ ]

    return (
        <section className="team" id="team">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2> Wahyu Kost Team</h2>
                                    <h3>
🚀 Kenapa Memilih Layanan Kami?

Kemudahan Penggunaan: Layanan kami dirancang dengan antarmuka yang ramah pengguna, membuatnya mudah digunakan oleh siapa pun, tanpa memandang tingkat keahlian teknis.

Efisiensi yang Luar Biasa: Kami berkomitmen untuk menyediakan solusi yang tidak hanya cepat, tetapi juga efisien. Hemat waktu Anda untuk hal-hal yang benar-benar penting dalam hidup.

Pilihan yang Luas: Dari layanan pemesanan, pengiriman, hingga konsultasi online, kami menyediakan berbagai layanan untuk memenuhi berbagai kebutuhan Anda.

Keamanan dan Privasi Terjamin: Keamanan dan privasi pelanggan adalah prioritas utama kami. Data pribadi Anda aman dan terlindungi.

Harga yang Bersaing: Kami menyajikan layanan berkualitas tinggi dengan harga yang kompetitif. Dapatkan nilai lebih tanpa mengorbankan kualitas</h3>
                                    <Tab.Container id="teams-tabs" defaultActiveKey="first">
                                        
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        card.map((project, index) => {
                                                            return (
                                                                <TeamCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Team;