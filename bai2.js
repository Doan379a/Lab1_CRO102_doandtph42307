import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
const Cuc1 = ({ diachi, thoigian, phuongtien, thoigianchay, anh }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "auto",
        padding: 20,
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Đây là thuộc tính duy nhất chỉ sử dụng trên Android
      }}
    >
      <Text>dia diem</Text>
      <Text style={styles.h2}>{diachi}</Text>
      <Text>Thoi gian</Text>
      <Text style={styles.h2}>{thoigian}</Text>
      <Text>Phuong tien di chuyen</Text>
      <Text style={styles.h2}>{phuongtien}</Text>
      <Text>Thoi gian</Text>
      <Text style={styles.h2}>{thoigianchay}</Text>
      <Text>Hinh anh</Text>
      <Image source={{ uri: anh }} style={{ height: 200, width: "100%" }} />
    </View>
  );
};
const Cuc2 = ({ tenkhachsan, giomocua, diadiem }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "auto",
        padding: 20,
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Đây là thuộc tính duy nhất chỉ sử dụng trên Android
      }}
    >
      <Text>Tên khách sạn</Text>
      <Text style={styles.h2}>{tenkhachsan}</Text>
      <Text>Giờ mở cửa</Text>
      <Text style={styles.h2}>{giomocua}</Text>
      <Text>Địa điểm</Text>
      <Text style={styles.h2}>{diadiem}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ color: "white" }}>Chi tiết</Text>
      </TouchableOpacity>
    </View>
  );
};
const Bai2 = () => {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={styles.h1}>Lich trinh</Text>
        <Cuc1
          diachi="Ho tram, vung tau"
          thoigian="09:900 AM-12:00 AM, 12/12/2024"
          phuongtien="xe bus"
          thoigianchay="21:00-23:00"
          anh="https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Cuc1
          diachi="Nguyễn Huệ Walking Street, Quận 1, Thành phố Hồ Chí Minh"
          thoigian="08:00 AM - 11:00 PM, Thứ Bảy, 12/03/2024"
          phuongtien="Xe máy, Xe buýt, Xe taxi"
          thoigianchay="Mọi lúc trong ngày"
          anh="https://th.bing.com/th/id/OIP._VaSLdmZTnBkek-L5_6TagHaE6?rs=1&pid=ImgDetMain"
        />
        <Cuc2
          tenkhachsan="Hồng quỳnh"
          giomocua="06:00 AM-12:00 AM"
          diadiem="234 Quang Trung, Hồ Chí Minh"
        />
      </View>
    </ScrollView>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  h1: { fontSize: 25, fontWeight: "bold", color: "black" },
  h2: { fontSize: 20, fontWeight: "bold", color: "black", marginBottom: 10 },
});
