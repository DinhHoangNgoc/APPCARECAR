import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';

const Calendars = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Calendar
          style={{color: '#000000'}}
          // Tháng có thể nhìn thấy ban đầu. Mặc định = now
          // current={'2012-03-01'}
          // Ngày tối thiểu có thể được chọn, những ngày trước Ngày tối thiểu sẽ chuyển sang màu xám. Default = undefined
          minDate={'2022-02-24'}
          // Ngày tối đa có thể được chọn, những ngày sau maxDate sẽ chuyển sang màu xám. Default = undefined
          // maxDate={'2012-05-30'}
          // Trình xử lý được thực thi vào ngày báo chí. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Trình xử lý được thực thi trong ngày dài. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Định dạng tháng trong tiêu đề lịch. Định dạng giá trị: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Trình xử lý được thực thi khi tháng hiển thị thay đổi trong lịch. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Ẩn các mũi tên điều hướng tháng. Default = false
          // hideArrows={true}
          // Thay thế các mũi tên mặc định bằng các mũi tên tùy chỉnh (hướng có thể là 'trái' hoặc 'phải')
          // renderArrow={direction => <Arrow />}
          // Không hiển thị ngày của các tháng khác trong tháng trang. Default = false
          hideExtraDays={true}
          // Nếu hideArrows = false và hideExtraDays = false, không chuyển tháng khi chạm vào chuyển sang màu xám
          // ngày từ tháng khác hiển thị trong trang lịch. Default = false
          disableMonthChange={false}
          // Nếu firstDay = 1 tuần bắt đầu từ Thứ Hai. Lưu ý rằng dayNames và dayNamesShort vẫn phải bắt đầu từ Sunday
          firstDay={1}
          // Ẩn tên ngày. Default = false
          hideDayNames={false}
          // Hiển thị số tuần ở bên trái. Default = false
          showWeekNumbers={false}
          // Trình xử lý được thực thi khi nhấn biểu tượng mũi tên sang trái. Nó nhận được một cuộc gọi lại có thể quay trở lại tháng
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Trình xử lý được thực thi khi nhấn biểu tượng mũi tên sang phải. Nó có thể nhận được một cuộc gọi lại vào tháng tới
          onPressArrowRight={addMonth => addMonth()}
          // Tắt mũi tên trái. Default = false
          disableArrowLeft={false}
          // Tắt mũi tên phải. Default = false
          disableArrowRight={false}
          // Tắt tất cả các sự kiện cảm ứng cho những ngày bị vô hiệu hóa. có thể được ghi đè bằng DisableTouchEvent trong Ngày được đánh
          // disableAllTouchEventsForDisabledDays={day < now ? false:true}
          // Thay thế tiêu đề tháng và năm mặc định bằng tiêu đề tùy chỉnh. hàm nhận ngày dưới dạng tham số
          renderHeader={date => {
            /*Return JSX*/
          }}
          // Bật tùy chọn vuốt giữa các tháng. Mặc định = false
          enableSwipeMonths={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default Calendars;
