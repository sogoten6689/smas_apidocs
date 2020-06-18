define({ "api": [
  {
    "type": "get",
    "url": "attendance/ademic-date/user/1/teacher/1/school/12313/academic_year/1",
    "title": "Ngày học kì",
    "name": "AcademicDate",
    "description": "<p>Lấy ngày bắt đầu và ngày kết thúc của học kì.</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/ademic-date/user/1/teacher/1/school/12313/academic_year/1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "school_id",
            "description": "<p>ID school.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>StartDate of the academy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>EndDate of academy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disable_date",
            "description": "<p>DisableDate of the academy.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"start_date\": \"1/4/2020\",\n  \"end_date\": \"20/7/2020\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"success\": false,\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"token\": \"00000000-0000-0000-0000-000000000000\",\n     \"UrlRequest\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/attendance.js",
    "groupTitle": "Điểm_danh"
  },
  {
    "type": "get",
    "url": "attendance/history/user/1/teacher/1/pupil/7/school/12313/academic_year/1",
    "title": "Lịch sử điểm danh",
    "name": "AttendanceHistory",
    "description": "<p>Lấy lịch sử điểm danh của một học sinh.</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/history/user/1/teacher/1/pupil/7/school/12313/academic_year/1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pupil",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "school_id",
            "description": "<p>ID school.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "History",
            "description": "<p>Students Attendance history.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "history.statistical",
            "description": "<p>History statictical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.statistical.total_present",
            "description": "<p>History statistical of present students.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.statistical.total_excused_absence",
            "description": "<p>History statistical of excused absence students.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.statistical.total_unexcused_absence",
            "description": "<p>History statistical of unexcused absence students.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.statistical.total_uncheck",
            "description": "<p>History statistical of uncheck students.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "history.dates",
            "description": "<p>List of students history dates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.dates.name",
            "description": "<p>Name of date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "history.dates.attendance_value",
            "description": "<p>Students history attendance value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"history\": {\n     \"statistical\": {\n     \"total_present\": \"4\",\n     \"total_excused_absence\": \"2\",\n     \"total_unexcused_absence\": \"1\",\n     \"total_uncheck\": \"0\"\n    },\n    \"dates\": [\n        {\n            \"name\": \"21/3/2020\",\n            \"attendance_value\": null\n        },\n        {\n            \"name\": \"22/3/2020\",\n            \"attendance_value\": \"K\"\n        },\n        {\n            \"name\": \"23/3/2020\",\n            \"attendance_value\": \"P\"\n        },\n        {\n            \"name\": \"24/3/2020\",\n            \"attendance_value\": \"P\"\n        },\n        {\n            \"name\": \"25/3/2020\",\n            \"attendance_value\": \"C\"\n        },\n        {\n            \"name\": \"26/3/2020\",\n            \"attendance_value\": \"C\"\n        },\n        {\n            \"name\": \"27/3/2020\",\n            \"attendance_value\": \"C\"\n        },\n        {\n            \"name\": \"29/3/2020\",\n            \"attendance_value\": \"C\"\n        },\n        {\n            \"name\": \"30/3/2020\",\n            \"attendance_value\": \"K\"\n        }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"success\": false,\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"token\": \"00000000-0000-0000-0000-000000000000\",\n     \"UrlRequest\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/attendance.js",
    "groupTitle": "Điểm_danh"
  },
  {
    "type": "get",
    "url": "/statistics/users/{user_id}/teachers/{teacher_id}/academicyears/{academic_year_id}/appliedlevels/{applied_level_id}/classes/{class_id}/section/{section_id}/date/{date}",
    "title": "Thống kê điểm danh theo ngày",
    "name": "Attendance_Statistics_by_Date",
    "description": "<p>Lấy thông tin thống kê điểm danh theo ngày</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/statistics/users/1/teachers/2/academicyears/2/appliedlevels/2/classes/4/section/1/date/20-10-2019\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "applied_level_id",
            "description": "<p>ID applied level.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "class_id",
            "description": "<p>ID class.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "semester_id",
            "description": "<p>ID semester.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin thông kê.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"success\": false,\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"token\": \"00000000-0000-0000-0000-000000000000\",\n     \"UrlRequest\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/statistical.js",
    "groupTitle": "Điểm_danh"
  },
  {
    "type": "get",
    "url": "/statistics/users/{user_id}/teachers/{teacher_id}/academicyears/{academic_year_id}/appliedlevels/{applied_level_id}/classes/{class_id}/section/{section_id}/from/{from_date}/to/{to_date}",
    "title": "Thống kê điểm danh theo tuần",
    "name": "Attendance_Statistics_by_Week",
    "description": "<p>Lấy thông tin thống kê điểm danh theo tuần</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/statistics/users/1/teachers/2/academicyears/2/appliedlevels/2/classes/4/section/1/from/20-10-2019/to/25-10-2019\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "applied_level_id",
            "description": "<p>ID applied level.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "class_id",
            "description": "<p>ID class.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "semester_id",
            "description": "<p>ID semester.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from_date",
            "description": "<p>Date Start of ưeek.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to_date",
            "description": "<p>Date End of week.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin thông kê.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"success\": false,\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"token\": \"00000000-0000-0000-0000-000000000000\",\n     \"UrlRequest\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/statistical.js",
    "groupTitle": "Điểm_danh"
  },
  {
    "type": "get",
    "url": "attendance/students/user/1/teacher/1/class/3/date/1-4-2020/school/12313/academic_year/1",
    "title": "Danh sách điểm danh",
    "name": "GetListAttendance",
    "description": "<p>Lấy thông tin/danh sách điểm danh của lớp.</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/students/user/1/teacher/1/class/3/date/1-4-2020/school/12313/academic_year/1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "class_id",
            "description": "<p>ID class.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "school_id",
            "description": "<p>ID school.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "session_code",
            "description": "<p>Session of day.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Chose date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Chose date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>Total of students in class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "presence",
            "description": "<p>Total of presence students in class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "absent",
            "description": "<p>Total of absent students in class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "class_image",
            "description": "<p>Image of class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "class_name",
            "description": "<p>Name of class.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "students",
            "description": "<p>List of student profiles.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sutdents.name",
            "description": "<p>Students name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sutdents.id",
            "description": "<p>Students id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sutdents.avatar",
            "description": "<p>Students avatar.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sutdents.attendance_value",
            "description": "<p>Students attendance value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sutdents.present_image",
            "description": "<p>Students present image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"date\": \"1/4/2020\",\n  \"total\": \"5\",\n  \"presence\": \"4\",\n  \"absent\": \"1\",\n  \"class_image\": null,\n  \"students\": [\n          {\n             \"name\": \"Nguyễn Văn ABCDE\",\n             \"puipil_id\": 1,\n             \"avatar\": null,\n             \"attendance_value\": \"C\",\n             \"present_image\": null,\n         },\n         {\n             \"name\": \"Nguyễn Văn FGHIKL\",\n             \"avatar\": null,\n             \"attendance_value\": \"C\",\n             \"present_image\": null,\n         },\n         {\n             \"name\": \"Nguyễn Văn MNOSR\",\n             \"puipil_id\": 2,\n             \"avatar\": null,\n             \"attendance_value\": \"C\",\n             \"present_image\": null,\n         },\n         {\n             \"name\": \"Nguyễn Văn D\",\n             \"puipil_id\": 3,\n             \"avatar\": null,\n             \"attendance_value\": \"K\",\n             \"present_image\": null,\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"success\": false,\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"token\": \"00000000-0000-0000-0000-000000000000\",\n     \"UrlRequest\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/attendance.js",
    "groupTitle": "Điểm_danh"
  },
  {
    "type": "get",
    "url": "time-type/users/{user_id}/academicyears/{academic_year_id}",
    "title": "Loại thống kê",
    "name": "GetTypeData",
    "description": "<p>Lấy loại thống kê và thời gian thống kê</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/time-type/users/1/teachers/1/academicyears/1/semester/1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID Teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic Year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "semester_id",
            "description": "<p>ID semester.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.is_view_all",
            "description": "<p>True được xem toàn trường. False: Không được xem toàn trường.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.educations",
            "description": "<p>Danh sách khối lớp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.educations.name",
            "description": "<p>Tên khối lớp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.educations.classes",
            "description": "<p>Danh sách lớp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.educations.classes.class_id",
            "description": "<p>ID lớp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.educations.classes.class_name",
            "description": "<p>Tên lớp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 OK\n{\n\"success\" : true,\n\"data\" : {\n     \"types\": [\n        {\n             \"type_key\": 1,\n             \"type_name\": \"Thống kê theo tuần\",\n             \"type_data\": [\n                 {\n                     \"from\": \"09-12-2019\",\n                     \"to\": \"13-12-2019\"\n                 },\n                 {\n                     \"from\": \"09-12-2019\",\n                     \"to\": \"13-12-2019\"\n                 }\n             ]\n         },\n         {\n             \"type_key\": 2,\n             \"type_name\": \"Thống kê theo ngày\",\n             \"type_data\": [\n                 {\n                     \"time\": \"09-12-2019\",\n                 },\n                 {\n                     \"time\": \"12-12-2019\",\n                 }\n             ]\n         }\n     ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"success\": false,\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"token\": \"00000000-0000-0000-0000-000000000000\",\n     \"UrlRequest\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/statistical.js",
    "groupTitle": "Điểm_danh"
  },
  {
    "type": "get",
    "url": "classes/users/{user_id}/teachers/{teacher_id}/academicyears/{academic_year_id}/appliedlevels/{applied_level_id}",
    "title": "Danh sách lớp",
    "name": "List_Classes",
    "description": "<p>Lấy danh sách lớp theo quyền của người dùng.</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/classes/users/1/teachers/1/academicyears/1/appliedlevels/2\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID Teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "academic_year_id",
            "description": "<p>ID academic Year.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "applied_level_id",
            "description": "<p>ID applied Level.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.is_view_all",
            "description": "<p>True được xem toàn trường. False: Không được xem toàn trường.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.educations",
            "description": "<p>Danh sách khối lớp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.educations.name",
            "description": "<p>Tên khối lớp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.educations.classes",
            "description": "<p>Danh sách lớp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "data.educations.classes.class_id",
            "description": "<p>ID lớp.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.educations.classes.class_name",
            "description": "<p>Tên lớp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 OK\n{\n\"success\" : true,\n\"data\" : {\n     \"is_view_all\": false,\n     \"educations\": [\n        {\n             \"education_name\": \"Khối 6\",\n             \"classes\": [\n                 {\n                     \"class_id\": 1247,\n                     \"class_name\": \"6A1\"\n                 },\n                 {\n                     \"class_id\": 1874,\n                     \"class_name\": \"6A2\"\n                 }\n             ]\n         },\n         {\n             \"education_name\": \"Khối 7\",\n             \"classes\": [\n                 {\n                     \"class_id\": 15874,\n                     \"class_name\": \"7A1\"\n                 },\n                 {\n                     \"class_id\": 1547,\n                     \"class_name\": \"7A2\"\n                 }\n             ]\n         }\n     ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>Mã lỗi.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"success\": false,\n     \"error_code\": \"ERROR_CODE_VALIDATE_TOKEN_FAIL\",\n     \"error_message\": \"Phiên làm việc đã kết thúc, vui lòng đăng nhập lại\",\n     \"token\": \"00000000-0000-0000-0000-000000000000\",\n     \"UrlRequest\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/statistical.js",
    "groupTitle": "Điểm_danh"
  },
  {
    "type": "POST",
    "url": "/attendance/student-attendances/",
    "title": "Lưu điểm danh",
    "name": "Saveattendances",
    "description": "<p>Lưu điểm danh cho lớp học.</p>",
    "group": "Điểm_danh",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>ID teacher.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "school_id",
            "description": "<p>ID school.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "class_id",
            "description": "<p>ID class.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "session",
            "description": "<p>Code session.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date attendance.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "students",
            "description": "<p>List students.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "students.id",
            "description": "<p>ID student.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "students.attendance_image",
            "description": "<p>Attendance image of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "students.attendance_value",
            "description": "<p>Attendance image of user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     http://localhost:1234/api/attendance/student-attendances/\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về true.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "message",
            "description": "<p>Lưu thành công</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 OK\n{\n     \"success\": true,\n     \"message\": \"Lưu thành công\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Trả về false.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Nội dung thông báo lỗi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "HTTP/1.1 Error\n{\n     \"success\": false,\n     \"message\": \"Lưu thất bại\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/attendance.js",
    "groupTitle": "Điểm_danh"
  }
] });
