export function formatDate(date) {
  if (!date || !(date instanceof Date) || Number.isNaN(date)) {
    return "Ngày không hợp lệ";
  }

  const now = new Date();
  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

  // Hôm nay
  if (diffInDays === 0) {
    if (diffInHours === 0) {
      if (diffInMinutes === 0) {
        return "Vừa xong";
      }
      return `${diffInMinutes} phút trước`;
    }
    return `${diffInHours} giờ trước`;
  }

  // Hôm qua
  if (diffInDays === 1) {
    return `Hôm qua lúc ${date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }

  // Trong tuần này
  if (diffInDays < 7) {
    const daysOfWeek = [
      "Chủ nhật",
      "Thứ hai",
      "Thứ ba",
      "Thứ tư",
      "Thứ năm",
      "Thứ sáu",
      "Thứ bảy",
    ];
    return `${daysOfWeek[date.getDay()]} lúc ${date.toLocaleTimeString(
      "vi-VN",
      {
        hour: "2-digit",
        minute: "2-digit",
      },
    )}`;
  }

  // Ngày trong tháng này
  if (diffInDays < 30) {
    return `${diffInDays} ngày trước`;
  }

  // Ngày trong năm này
  if (diffInDays < 365) {
    const monthsOfYear = [
      "tháng 1",
      "tháng 2",
      "tháng 3",
      "tháng 4",
      "tháng 5",
      "tháng 6",
      "tháng 7",
      "tháng 8",
      "tháng 9",
      "tháng 10",
      "tháng 11",
      "tháng 12",
    ];
    return `${date.getDate()} ${monthsOfYear[date.getMonth()]} lúc ${date.toLocaleTimeString(
      "vi-VN",
      {
        hour: "2-digit",
        minute: "2-digit",
      },
    )}`;
  }

  // Năm trước hoặc lâu hơn
  return date.toLocaleDateString("vi-VN", {
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    month: "long",
    year: "numeric",
  });
}
