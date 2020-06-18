/**
 * @api {get} attendance/ademic-date/user/1/teacher/1/school/12313/academic_year/1 Ngày học kì
 * @apiName AcademicDate
 * @apiDescription Lấy ngày bắt đầu và ngày kết thúc của học kì.
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/ademic-date/user/1/teacher/1/school/12313/academic_year/1
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID user.
 * @apiParam (Parameter) {Int} teacher_id ID teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic year.
 * @apiParam (Parameter) {Int} school_id ID school.
 *  
 * @apiSuccess {String} start_date StartDate of the academy.
 * @apiSuccess {String} end_date EndDate of academy.
 * @apiSuccess {String} disable_date DisableDate of the academy.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "start_date": "1/4/2020",
 *       "end_date": "20/7/2020",
 *     }
 * 
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 *  
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 */

/**
 * @api {get} attendance/students/user/1/teacher/1/class/3/date/1-4-2020/school/12313/academic_year/1  Danh sách điểm danh
 * @apiName GetListAttendance
 * @apiDescription Lấy thông tin/danh sách điểm danh của lớp.
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/students/user/1/teacher/1/class/3/date/1-4-2020/school/12313/academic_year/1
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID user.
 * @apiParam (Parameter) {Int} teacher_id ID teacher.
 * @apiParam (Parameter) {Int} class_id ID class.
 * @apiParam (Parameter) {Int} academic_year_id ID academic year.
 * @apiParam (Parameter) {Int} school_id ID school.
 * @apiParam (Parameter) {Int} session_code Session of day.
 * @apiParam (Parameter) {String} date Chose date.
 *  
 * @apiSuccess {String} date Chose date.
 * @apiSuccess {String} total Total of students in class.
 * @apiSuccess {String} presence Total of presence students in class.
 * @apiSuccess {String} absent Total of absent students in class.
 * @apiSuccess {String} class_image Image of class.
 * @apiSuccess {String} class_name Name of class.
 * @apiSuccess {Array}  students List of student profiles.
 * @apiSuccess {String} sutdents.name Students name.
 * @apiSuccess {String} sutdents.id Students id.
 * @apiSuccess {Name}   sutdents.name Students name.
 * @apiSuccess {String} sutdents.avatar Students avatar.
 * @apiSuccess {String} sutdents.attendance_value Students attendance value.
 * @apiSuccess {String} sutdents.present_image Students present image.
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "date": "1/4/2020",
 *       "total": "5",
 *       "presence": "4",
 *       "absent": "1",
 *       "class_image": null,
 *       "students": [
 *               {
 *                  "name": "Nguyễn Văn ABCDE",
 *                  "puipil_id": 1,
 *                  "avatar": null,
 *                  "attendance_value": "C",
 *                  "present_image": null,
 *              },
 *              {
 *                  "name": "Nguyễn Văn FGHIKL",
 *                  "avatar": null,
 *                  "attendance_value": "C",
 *                  "present_image": null,
 *              },
 *              {
 *                  "name": "Nguyễn Văn MNOSR",
 *                  "puipil_id": 2,
 *                  "avatar": null,
 *                  "attendance_value": "C",
 *                  "present_image": null,
 *              },
 *              {
 *                  "name": "Nguyễn Văn D",
 *                  "puipil_id": 3,
 *                  "avatar": null,
 *                  "attendance_value": "K",
 *                  "present_image": null,
 *              }
 *          ]
 *      }
 *
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 *  
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 */

/**
 * @api {get} attendance/history/user/1/teacher/1/pupil/7/school/12313/academic_year/1 Lịch sử điểm danh
 * @apiName  AttendanceHistory 
 * @apiDescription Lấy lịch sử điểm danh của một học sinh.
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 *
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/history/user/1/teacher/1/pupil/7/school/12313/academic_year/1
 * }
 * 
 * @apiParam (Parameter) {Int} pupil ID user.
 * @apiParam (Parameter) {Int} teacher_id ID teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic year.
 * @apiParam (Parameter) {Int} school_id ID school.
 *  
 * @apiSuccess {Array} History Students Attendance history.
 * @apiSuccess {Array} history.statistical  History statictical.
 * @apiSuccess {String} history.statistical.total_present History statistical of present students.
 * @apiSuccess {String} history.statistical.total_excused_absence History statistical of excused absence students.
 * @apiSuccess {String} history.statistical.total_unexcused_absence History statistical of unexcused absence students.
 * @apiSuccess {String} history.statistical.total_uncheck History statistical of uncheck students.
 * @apiSuccess {Array} history.dates List of students history dates.
 * @apiSuccess {String} history.dates.name Name of date.
 * @apiSuccess {String} history.dates.attendance_value Students history attendance value.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "history": {
 *          "statistical": {
 *          "total_present": "4",
 *          "total_excused_absence": "2",
 *          "total_unexcused_absence": "1",
 *          "total_uncheck": "0"
 *         },
 *         "dates": [
 *             {
 *                 "name": "21/3/2020",
 *                 "attendance_value": null
 *             },
 *             {
 *                 "name": "22/3/2020",
 *                 "attendance_value": "K"
 *             },
 *             {
 *                 "name": "23/3/2020",
 *                 "attendance_value": "P"
 *             },
 *             {
 *                 "name": "24/3/2020",
 *                 "attendance_value": "P"
 *             },
 *             {
 *                 "name": "25/3/2020",
 *                 "attendance_value": "C"
 *             },
 *             {
 *                 "name": "26/3/2020",
 *                 "attendance_value": "C"
 *             },
 *             {
 *                 "name": "27/3/2020",
 *                 "attendance_value": "C"
 *             },
 *             {
 *                 "name": "29/3/2020",
 *                 "attendance_value": "C"
 *             },
 *             {
 *                 "name": "30/3/2020",
 *                 "attendance_value": "K"
 *             }
 *         ]
 *       }
 *     }
 *  
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 *  
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 */

/**
 * @api {POST} /attendance/student-attendances/ Lưu điểm danh
 * @apiName  Saveattendances
 * @apiDescription Lưu điểm danh cho lớp học.
 * @apiGroup Điểm danh
 * 
 * @apiHeader {String} Token Token
 *
 * @apiParam (Parameter) {String} user_id ID user.
 * @apiParam (Parameter) {String} teacher_id ID teacher.
 * @apiParam (Parameter) {String} school_id ID school.
 * @apiParam (Parameter) {String} class_id ID class.
 * @apiParam (Parameter) {String} session Code session.
 * @apiParam (Parameter) {String} date Date attendance.
 * 
 * @apiParam (Parameter) {Array} students List students.
 * @apiParam (Parameter) {String} students.id ID student.
 * @apiParam (Parameter) {String} students.attendance_image Attendance image of user.
 * @apiParam (Parameter) {String} students.attendance_value Attendance image of user.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/student-attendances/
 * }
 *
 * @apiSuccess {Boolean} success                            Trả về true.
 * @apiSuccess {Array} message                              Lưu thành công
 *
 * @apiSuccessExample Success Response
 * HTTP/1.1 OK
 * {
 *      "success": true,
 *      "message": "Lưu thành công"
 *  }
 *  
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} message Nội dung thông báo lỗi.
 *
 * @apiErrorExample Error Response
 * HTTP/1.1 Error
 * {
 *      "success": false,
 *      "message": "Lưu thất bại"
 * }
 */

/**
 * @api {get} classes/users/{user_id}/teachers/{teacher_id}/academicyears/{academic_year_id}/appliedlevels/{applied_level_id} Danh sách lớp
 * @apiName List Classes
 * @apiDescription Lấy danh sách lớp theo quyền của người dùng.
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/classes/users/1/teachers/1/academicyears/1/appliedlevels/2
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID User.
 * @apiParam (Parameter) {Int} teacher_id ID Teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic Year.
 * @apiParam (Parameter) {Int} applied_level_id ID applied Level.
 *  
 * @apiSuccess {Boolean} success True.
 * @apiSuccess {Object} data Thông tin.
 * @apiSuccess {Boolean} data.is_view_all True được xem toàn trường. False: Không được xem toàn trường.
 * @apiSuccess {Array} data.educations Danh sách khối lớp.
 * @apiSuccess {String} data.educations.name Tên khối lớp.
 * @apiSuccess {Array} data.educations.classes Danh sách lớp.
 * @apiSuccess {Int} data.educations.classes.class_id ID lớp.
 * @apiSuccess {String} data.educations.classes.class_name Tên lớp.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 OK
 * {
 * "success" : true,
 * "data" : {
 *      "is_view_all": false,
 *      "educations": [
 *         {
 *              "education_name": "Khối 6",
 *              "classes": [
 *                  {
 *                      "class_id": 1247,
 *                      "class_name": "6A1"
 *                  },
 *                  {
 *                      "class_id": 1874,
 *                      "class_name": "6A2"
 *                  }
 *              ]
 *          },
 *          {
 *              "education_name": "Khối 7",
 *              "classes": [
 *                  {
 *                      "class_id": 15874,
 *                      "class_name": "7A1"
 *                  },
 *                  {
 *                      "class_id": 1547,
 *                      "class_name": "7A2"
 *                  }
 *              ]
 *          }
 *      ]
 *  }
 * }
 *
 * 
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 *  
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 */

/**
 * @api {get} time-type/users/{user_id}/academicyears/{academic_year_id} Loại thống kê
 * @apiName GetTypeData
 * @apiDescription Lấy loại thống kê và thời gian thống kê
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/time-type/users/1/teachers/1/academicyears/1/semester/1
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID User.
 * @apiParam (Parameter) {Int} teacher_id ID Teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic Year.
 * @apiParam (Parameter) {Int} semester_id ID semester.
 *  
 * @apiSuccess {Boolean} success True.
 * @apiSuccess {Object} data Thông tin.
 * @apiSuccess {Boolean} data.is_view_all True được xem toàn trường. False: Không được xem toàn trường.
 * @apiSuccess {Array} data.educations Danh sách khối lớp.
 * @apiSuccess {String} data.educations.name Tên khối lớp.
 * @apiSuccess {Array} data.educations.classes Danh sách lớp.
 * @apiSuccess {Int} data.educations.classes.class_id ID lớp.
 * @apiSuccess {String} data.educations.classes.class_name Tên lớp.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 OK
 * {
 * "success" : true,
 * "data" : {
 *      "types": [
 *         {
 *              "type_key": 1,
 *              "type_name": "Thống kê theo tuần",
 *              "type_data": [
 *                  {
 *                      "from": "09-12-2019",
 *                      "to": "13-12-2019"
 *                  },
 *                  {
 *                      "from": "09-12-2019",
 *                      "to": "13-12-2019"
 *                  }
 *              ]
 *          },
 *          {
 *              "type_key": 2,
 *              "type_name": "Thống kê theo ngày",
 *              "type_data": [
 *                  {
 *                      "time": "09-12-2019",
 *                  },
 *                  {
 *                      "time": "12-12-2019",
 *                  }
 *              ]
 *          }
 *      ]
 *  }
 * }
 *
 * 
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 *  
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 */

/**
 * @api {get} /statistics/users/{user_id}/teachers/{teacher_id}/academicyears/{academic_year_id}/appliedlevels/{applied_level_id}/classes/{class_id}/section/{section_id}/date/{date} Thống kê điểm danh theo ngày
 * @apiName Attendance Statistics by Date
 * @apiDescription Lấy thông tin thống kê điểm danh theo ngày
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/statistics/users/1/teachers/2/academicyears/2/appliedlevels/2/classes/4/section/1/date/20-10-2019
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID user.
 * @apiParam (Parameter) {Int} teacher_id ID teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic year.
 * @apiParam (Parameter) {Int} applied_level_id ID applied level.
 * @apiParam (Parameter) {Int} class_id ID class.
 * @apiParam (Parameter) {Int} semester_id ID semester.
 * @apiParam (Parameter) {String} date Date.
 *  
 * @apiSuccess {Boolean} success True.
 * @apiSuccess {Object} data Thông tin thông kê.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     }
 *
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 * 
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 *  
 */

/**
 * @api {get} /statistics/users/{user_id}/teachers/{teacher_id}/academicyears/{academic_year_id}/appliedlevels/{applied_level_id}/classes/{class_id}/section/{section_id}/from/{from_date}/to/{to_date} Thống kê điểm danh theo tuần
 * @apiName Attendance Statistics by Week
 * @apiDescription Lấy thông tin thống kê điểm danh theo tuần
 * @apiGroup Điểm danh
 *
 * @apiHeader {String} Token Token.
 * 
 * @apiParamExample Request-Example:
 * {
 *      http://localhost:1234/api/attendance/statistics/users/1/teachers/2/academicyears/2/appliedlevels/2/classes/4/section/1/from/20-10-2019/to/25-10-2019
 * }
 *
 * @apiParam (Parameter) {Int} user_id ID user.
 * @apiParam (Parameter) {Int} teacher_id ID teacher.
 * @apiParam (Parameter) {Int} academic_year_id ID academic year.
 * @apiParam (Parameter) {Int} applied_level_id ID applied level.
 * @apiParam (Parameter) {Int} class_id ID class.
 * @apiParam (Parameter) {Int} semester_id ID semester.
 * @apiParam (Parameter) {String} from_date Date Start of ưeek.
 * @apiParam (Parameter) {String} to_date Date End of week.
 *  
 * @apiSuccess {Boolean} success True.
 * @apiSuccess {Object} data Thông tin thông kê.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     }
 *
 * @apiError {Boolean} success Trả về false.
 * @apiError {String} error_code Mã lỗi.
 * @apiError {String} message Nội dung thông báo lỗi.
 * 
 * @apiErrorExample Error-Response:
 * {
 *      "success": false,
 *      "error_code": "ERROR_CODE_VALIDATE_TOKEN_FAIL",
 *      "error_message": "Phiên làm việc đã kết thúc, vui lòng đăng nhập lại",
 *      "token": "00000000-0000-0000-0000-000000000000",
 *      "UrlRequest": null
 * }
 *  
 */

