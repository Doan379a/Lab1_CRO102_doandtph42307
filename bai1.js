import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import GioiThieu from './gioithieu';

const Header = ({name, endImage, startImage, gia, loai, ten}) => {
  const [khiclick, setkhiclick] = useState(true);
  const Click = () => {
    setkhiclick(!khiclick);
  };
  const [foodsale, setfoodsale] = useState([
    {
      name: 'Lẩu mắm',
      url: 'https://file.hstatic.net/1000054905/file/lau-mam-mien-tay_7f06645c5f8344bf939a734afba04482.jpg',
    },
    {
      name: 'Lẩu cá linh',
      url: 'https://file.hstatic.net/1000054905/file/lau-ca-linh-mien-tay_b4cbf04b537147a7aefc3c5ef6ccc3dd.jpg',
    },
    {
      name: 'Bún mắm ',
      url: 'https://file.hstatic.net/1000054905/file/bun-mam-mien-tay_6c2e7786dc374bfea7da2eb05b8404b8.jpg',
    },
    {
      name: 'Bún cá',
      url: 'https://file.hstatic.net/1000054905/file/bun-ca-mien-tay_3c88d795bd2c4e6da8e600e22540bfea.jpg',
    },
    {
      name: 'Gà hấp rượu',
      url: 'https://file.hstatic.net/1000054905/file/ga-hap-mien-tay_1e1db4c3821347a499c2fd50a6ad7fe9.jpg',
    },
    {
      name: 'Cháo cá',
      url: 'https://file.hstatic.net/1000054905/file/long-an-chao-ca-loc_2e6f80a42f10428db7f5ba96cf20c1b3.jpg',
    },
    {
      name: 'Bò tùng xẻo',
      url: 'https://file.hstatic.net/1000054905/file/bo-tung-xeo-mien-tay_763214a5a4f84d9a81933540b5c62bc3.jpg',
    },
    {
      name: 'Đuông dừa',
      url: 'https://file.hstatic.net/1000054905/file/du-lich-mien-tay__22__35f70d76e6fa4a6884fe8eef4bd87405.jpg',
    },
    {
      name: 'Bánh xèo ',
      url: 'https://file.hstatic.net/1000054905/file/banh-xeo-ngon_178e5b652a034c7ca1aadefc36085170.jpg',
    },
    {
      name: 'Bún Thang',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/bun-thang-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Bún Ốc',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/bun-oc-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Cốm Làng Vòng',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/com-lang-vong-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Bánh mỳ',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/banh-mi-25-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Bánh tôm Hồ Tây',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/banh-tom-ho-tay-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Cà phê Trứng',
      url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/ca-phe-trung-mon-an-ngon-o-ha-noi.jpg',
    },
    {
      name: 'Bánh Căn',
      url: 'https://datnenlagi.net/wp-content/uploads/2022/06/foody-upload-api-foody-mobile-banh-can-ngon-jpg-180309160642.jpg',
    },
    {
      name: 'Gỏi cá mai Lagi ',
      url: 'https://datnenlagi.net/wp-content/uploads/2022/06/img20210506155503-16203176274411053318312-min-scaled.jpg',
    },
    {
      name: 'Bún bò Huế',
      url: 'https://media.cooky.vn/recipe/g3/28487/s/recipe28487-prepare-step5-636577704586605195.jpg',
    },
    {
      name: 'Hủ tiếu',
      url: 'https://media.cooky.vn/recipe/g1/1552/s/recipe1552-cook-step8-636875649012584632.jpg',
    },
  ]);
  return (
    <View>
      {khiclick ? (
        <TouchableOpacity
          onPress={Click}
          style={{
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            alignItems: 'center',
          }}>
          <Image source={{uri: startImage}} style={{height: 30, width: 30}} />
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            {name}
          </Text>
          <Image source={{uri: endImage}} style={{height: 50, width: 50}} />
        </TouchableOpacity>
      ) : (
        <View>
          <TouchableOpacity onPress={Click} style={{}}>
            <View
              style={{
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#b3ffe0',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: startImage}}
                style={{height: 30, width: 30}}
              />
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                {name}
              </Text>
              <Image source={{uri: endImage}} style={{height: 50, width: 50}} />
            </View>
          </TouchableOpacity>
          <View style={styles.cuc2}>
            {name == 'Header' && (
              <View
                style={{
                  height: 200,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.h2}>Xin chao mung ban</Text>
              </View>
            )}
            {name == 'san pham' && (
              <FlatList
                horizontal
                data={foodsale}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        borderColor: 'gray',
                        height: 200,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          height: 130,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginHorizontal: 10,
                        }}>
                        <Image
                          style={{
                            height: 80,
                            width: 80,
                            borderRadius: 50,
                            marginBottom: 7,
                          }}
                          source={{
                            uri: item.url,
                          }}></Image>
                        <View
                          style={{
                            marginHorizontal: 10, // Đã thay đổi từ marginRight thành marginLeft
                            alignItems: 'center', // Cập nhật dòng này để căn giữa theo chiều dọc
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 14,
                              fontWeight: 'bold',
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            )}
            {name == 'Tim Kiem' && (
              <View style={{height: 200}}>
                <View
                  style={{
                    height: 50,
                    backgroundColor: 'rgb(255, 179, 179)',
                    marginHorizontal: 20,
                    borderRadius: 50,
                    marginTop: 10,
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                  }}>
                  <TextInput
                    placeholder="Tìm Kiếm"
                    onChangeText={text => setsearchText(text)}
                    style={{width: '90%', marginStart: 12}}
                  />
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/?size=64&id=42848&format=png',
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      position: 'absolute',
                      end: 3,
                    }}
                  />
                </View>
              </View>
            )}
            {name == 'Gioi Thieu' && <GioiThieu />}
          </View>
        </View>
      )}
    </View>
  );
};

const Bai1 = () => {
  return (
    <View>
      <Header
        name="Header"
        startImage="https://img.icons8.com/?size=48&id=rEHC5F4SmBvK&format=png"
        endImage="https://img.icons8.com/?size=48&id=23239&format=png"
      />
      <Header
        name="Tim Kiem"
        startImage="https://img.icons8.com/?size=48&id=rEHC5F4SmBvK&format=png"
        endImage="https://img.icons8.com/?size=40&id=23458&format=png"
      />
      <Header
        name="Gioi Thieu"
        startImage="https://img.icons8.com/?size=48&id=rEHC5F4SmBvK&format=png"
        endImage="https://img.icons8.com/?size=64&id=118252&format=png"
      />
      <Header
        name="san pham"
        startImage="https://img.icons8.com/?size=48&id=rEHC5F4SmBvK&format=png"
        endImage="https://img.icons8.com/?size=40&id=23458&format=png"
        // ten="Bánh quy"
        // gia="300"
        // loai="do an"
      />
    </View>
  );
};

export default Bai1;

const styles = StyleSheet.create({
  h2: {fontSize: 20, color: 'black'},

  cuc2: {
    height: 'auto',
    backgroundColor: '#e6fff7',
    shadowColor: '#000',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingTop: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
