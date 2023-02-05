<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('inc/metatag.php'); ?>
    <?php include('inc/loadstyle.php'); ?>
</head>

<body>

    <div class="global-container">
        <?php include('inc/header.php'); ?>

        <section class="layout-container">

            <div class="default-page">

                <?php $i = 10 ?>
                <!-- progress bar -->
                <div class="progress-default d-none">
                    <div class="row align-items-center gutters-10">
                        <div class="col">
                            <div class="progress" style="height: 2px;">
                                <div class="progress-bar" role="progressbar" style="width: <?php echo $i; ?>%;" aria-valuenow="<?php echo $i; ?>" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="progress-label"><?php echo $i; ?>%</div>
                        </div>
                    </div>
                </div>
                <!-- end progress bar -->

                <div class="default-head">
                    <div class="container">
                        <div class="whead text-center">
                            <h2 class="h-title fw-bold typo-xl">
                                แจ้งเหตุการณ์สำคัญทางทะเลและชายฝั่ง
                            </h2>
                        </div>
                        <div class="step-block">
                            <div class="progress-default d-md-none d-block">
                                <div class="progress progress-step-3" style="height: 4px;">
                                    <div class="progress-bar"></div>
                                </div>
                            </div>
                            <div class="row justify-content-center align-items-start gutters-10">
                                <div class="col item step-1">
                                    <div class="icon">
                                        <img style="-webkit-user-select: none" src="<?php echo $core_template; ?>public/image/icon/icon-write-gradient.svg" alt="icon-write-gradient.svg">
                                    </div>
                                    <div class="title">
                                        เหตุการณ์ที่ต้องการแจ้ง
                                    </div>
                                </div>
                                <div class="col item step-2">
                                    <div class="icon">
                                        <img style="-webkit-user-select: none" src="<?php echo $core_template; ?>public/image/icon/icon-pin.svg" alt="icon-pin.svg">
                                    </div>
                                    <div class="title">
                                        ตำแหน่งที่เกิดเหตุ
                                    </div>
                                </div>
                                <div class="col item step-3 active">
                                    <div class="icon">
                                        <img style="-webkit-user-select: none" src="<?php echo $core_template; ?>public/image/icon/icon-image.svg" alt="icon-image.svg">
                                    </div>
                                    <div class="title">
                                        รูปภาพหรือไฟล์แนบ
                                    </div>
                                </div>
                                <div class="col item step-4">
                                    <div class="icon">
                                        <img style="-webkit-user-select: none" src="<?php echo $core_template; ?>public/image/icon/icon-resume.svg" alt="icon-resume.svg">
                                    </div>
                                    <div class="title">
                                        ข้อมูลผู้แจ้งเหตุ
                                    </div>
                                </div>
                                <div class="col item step-5">
                                    <div class="icon">
                                        <img style="-webkit-user-select: none" src="<?php echo $core_template; ?>public/image/icon/icon-done.svg" alt="icon-done.svg">
                                    </div>
                                    <div class="title">
                                        เสร็จสิ้น
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="default-body">
                    <div class="container">
                        <div class="report">

                            <!-- Step 1 -->
                            <div class="card card-step-1" style="display: none;">
                                <div class="card-body">
                                    <div class="row justify-content-between">
                                        <div class="col-xl-7 col-lg-6">
                                            <div class="left-side">
                                                <!--  data-aos="fade-up" data-aos-duration="2000" -->
                                                <!-- <h2>step 1</h2> -->
                                                <div class="whead">
                                                    <h3 class="title">
                                                        <div class="d-flex align-items-center">
                                                            <div class="icon">
                                                                <img style="-webkit-user-select: none" src="<?php echo $core_template; ?>public/image/icon/icon-write.svg" alt="icon-write.svg">
                                                            </div>
                                                            <div class="txt">
                                                                เหตุการณ์ที่ต้องการแจ้ง
                                                            </div>
                                                        </div>
                                                    </h3>
                                                </div>
                                                <!-- Step 1  -->
                                                <div class="contact-form formComplaint-step1" id="step-1">
                                                    <form class="form-default" data-toggle="validator" method="post" id="formComplaint-step1">
                                                        <div class="form-wrapper">
                                                            <div class="row">
                                                                <div class="col-sm-12 col-xs-12">
                                                                    <!--  data-aos="fade-right" data-aos-duration="2000" -->
                                                                    <div class="form-group">
                                                                        <label class="control-label d-none">เหตุการณ์ที่ต้องการแจ้ง <span class="require">*</span></label>
                                                                        <select class="select-control" style="width: 100%;" name="type_id" id="type_id" required>
                                                                            <option value="">กดเพื่อเลือกเรื่องที่ต้องการแจ้งเหตุ</option>
                                                                            {foreach $callGroupComplaint as $listGroup}
                                                                            <option value="{$listGroup.id}">{$listGroup.subject}</option>
                                                                            {/foreach}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-12 col-xs-12">
                                                                    <!--  data-aos="fade-right" data-aos-duration="2000" -->
                                                                    <div class="form-group has-feedback">
                                                                        <label class="control-label"><span class="require">*</span> หัวข้อติดต่อ</label>
                                                                        <input class="form-control" type="text" name="subject" id="subject" value="" data-error="กรุณากรอกชื่อ - นามสกุล" required>
                                                                        <div class="help-block with-errors"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!--  data-aos="fade-up" data-aos-duration="2000" -->
                                                            <div class="form-group has-feedback">
                                                                <label class="control-label"><span class="require">*</span> สถานที่เกิดเหตุ ( เช่น ชื่ออ่าว เกาะ หาด บ้าน ซอย ตำบล อำเภอ จังหวัด ที่สามารถระบุได้ )</label>
                                                                <textarea class="form-control" rows="3" name="place_complaint" id="place_complaint" value="{$formkey.complaint_detail}" data-error="กรุณากรอกสถานที่เกิดเหตุ" required></textarea>
                                                                <div class="help-block with-errors"></div>
                                                            </div>
                                                            <!--  data-aos="fade-up" data-aos-duration="2000" -->
                                                            <div class="form-group has-feedback">
                                                                <label class="control-label"><span class="require">*</span> รายละเอียดของเหตุการณ์</label>
                                                                <textarea class="form-control" rows="3" name="description" id="description" value="{$formkey.complaint_detail}" data-error="กรุณากรอกรายละเอียดของเหตุการณ์" required></textarea>
                                                                <div class="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div class="contact-form-action">
                                                            <div class="wrapper">
                                                                <!--  data-aos="fade-right" data-aos-duration="2000" -->
                                                                <div>
                                                                    <button type="submit" class="btn btn-primary btn-gradient rounded-pill" id="submitFormComplaint">
                                                                        <div class="d-flex justify-content-center">
                                                                            <div class="icon rounded-circle">
                                                                                <span class="feather icon-chevron-right"></span>
                                                                            </div>
                                                                            <div class="txt">
                                                                                ต่อไป
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4">
                                            <?php include('inc/components/right-side.php'); ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end Step 1 -->

                            <!-- Step 2 -->
                            <div class="card card-step-2" style="display: none;">
                                <div class="card-body">
                                    <div class="row justify-content-between">
                                        <div class="col-xl-7 col-lg-6">
                                            <div class="left-side">
                                                <!--  data-aos="fade-up" data-aos-duration="2000" -->
                                                <div class="whead">
                                                    <h3 class="title">
                                                        <div class="d-flex align-items-center">
                                                            <div class="icon">
                                                                <img style="-webkit-user-select: none" src="<?php echo $core_template; ?>public/image/icon/icon-pin.svg" alt="icon-pin.svg">
                                                            </div>
                                                            <div class="txt">
                                                                ตำแหน่งที่เกิดเหตุ
                                                            </div>
                                                        </div>
                                                    </h3>
                                                    <p class="desc">(ระบบจะแสดงจุดปัจจุบันเมื่อเปิดโหมด GPS หรือสามารถเลื่อนจุดที่เกิดเหตุบนแผนที่ได้)</p>
                                                </div>
                                                <div class="contact-form formComplaint-step2" id="step-2">
                                                    <form class="form-default" data-toggle="validator" method="post" id="formComplaint-step2">
                                                        <div class="form-wrapper">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <!--  data-aos="fade-up" data-aos-duration="2000" -->
                                                                    <div class="form-group h-100">
                                                                        <div id="map_canvas" class="rounded-xl overflow-hidden">
                                                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3787.6620210759834!2d99.3986862!3d18.3170581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d96f16df85adb1%3A0xc11e50b2286fcbba!2z4Liq4LiZ4Liy4Lih4Lif4Li44LiV4Lia4Lit4LilIOC4leC4s-C4muC4pSDguJvguIfguKLguLLguIfguITguIEg4Lit4Liz4LmA4Lig4Lit4Lir4LmJ4Liy4LiH4LiJ4Lix4LiV4LijIOC4peC4s-C4m-C4suC4hyA1MjE5MA!5e0!3m2!1sth!2sth!4v1675460038237!5m2!1sth!2sth" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="row">
                                                                        <div class="col-12">
                                                                            <!--  data-aos="fade-left" data-aos-duration="2000" -->
                                                                            <div class="form-group">
                                                                                <label class="control-label">ละติจูด (N) <span class="require"></span></label>
                                                                                <input class="form-control" type="text" name="latitude" id="latitude" value="" data-error="กรุณากรอกละติจูด">
                                                                                <div class="help-block with-errors"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <!--  data-aos="fade-left" data-aos-duration="2000" -->
                                                                            <div class="form-group">
                                                                                <label class="control-label">ลองจิจูด (E) <span class="require"></span></label>
                                                                                <input class="form-control" type="text" name="longitude" id="longitude" value="" data-error="กรุณากรอกลองจิจูด">
                                                                                <div class="help-block with-errors"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <!--  data-aos="fade-left" data-aos-duration="2000" -->
                                                                            <div class="form-group">
                                                                                <label class="control-label">พิกัด UTM (X) <span class="require"></span></label>
                                                                                <input class="form-control" type="text" name="utmx" id="utmx" value="" data-error="กรุณากรอกลองจิจูด">
                                                                                <div class="help-block with-errors"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <!--  data-aos="fade-left" data-aos-duration="2000" -->
                                                                            <div class="form-group">
                                                                                <label class="control-label">พิกัด UTM (Y) <span class="require"></span></label>
                                                                                <input class="form-control" type="text" name="utmy" id="utmy" value="" data-error="กรุณากรอกลองจิจูด">
                                                                                <div class="help-block with-errors"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="contact-form-action">
                                                            <div class="wrapper">
                                                                <!--  data-aos="fade-left" data-aos-duration="2000" -->
                                                                <div>
                                                                    <button type="button" class="btn btn-border-primary rounded-pill" onclick="FuncPrevious('.formComplaint-step1', '.formComplaint-step2')">
                                                                        <div class="d-flex justify-content-center">
                                                                            <div class="icon rounded-circle">
                                                                                <span class="feather icon-chevron-left"></span>
                                                                            </div>
                                                                            <div class="txt">
                                                                                ย้อนกลับ
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                    <button type="submit" class="btn btn-primary btn-gradient rounded-pill" id="submitFormComplaint">
                                                                        <div class="d-flex justify-content-center">
                                                                            <div class="icon rounded-circle">
                                                                                <span class="feather icon-chevron-right"></span>
                                                                            </div>
                                                                            <div class="txt">
                                                                                ต่อไป
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4">
                                            <?php include('inc/components/right-side.php'); ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end Step 2 -->

                            <!-- Step 3 -->
                            <div class="card card-step-3">
                                <div class="card-body">
                                    <div class="row justify-content-between">
                                        <div class="col-xl-7 col-lg-6">
                                            <div class="left-side">
                                                <!--  data-aos="fade-up" data-aos-duration="2000" -->
                                                <div class="whead">
                                                    <h3 class="title">
                                                        <div class="d-flex align-items-center">
                                                            <div class="icon">
                                                                <img style="-webkit-user-select: none" src="<?php echo $core_template; ?>public/image/icon/icon-image.svg" alt="icon-image.svg">
                                                            </div>
                                                            <div class="txt">
                                                                รูปภาพหรือไฟล์แนบ
                                                            </div>
                                                        </div>
                                                    </h3>
                                                </div>
                                                <div class="contact-form formComplaint-step3" id="step-3">
                                                    <form class="form-default" data-toggle="validator" method="post" id="formComplaint-step3">
                                                        <div class="form-wrapper">
                                                            <div class="upload-file">
                                                                <!--  data-aos="fade-up" data-aos-duration="2000" -->
                                                                <div class="form-group">
                                                                    <label class="control-label" for="">เอกสารแนบ</label>
                                                                    <div class="upload-file-block">
                                                                        <div class="row">
                                                                            <div class="col-12">
                                                                                <label for="use-only-upload-1" class="upload-file-btn contact-form-att -upload-1" style="width: 100%;">
                                                                                    <div class="card">
                                                                                        <div class="card-body">
                                                                                            <div class="icon">
                                                                                                <img class="mx-auto" src="<?php echo $core_template; ?>public/image/asset/upload-file-graphic.svg" alt="upload-file-graphic.svg">
                                                                                            </div>
                                                                                            <div class="help-block">ลากและวางรูปภาพเพื่ออัพโหลด</div>
                                                                                            <button type="button" class="btn btn-primary btn-gradient rounded-pill upload-btn">อัพโหลด</button>
                                                                                            <input class="input-file" id="use-only-upload-1" type="file" multiple style="display:none;">
                                                                                            <div class="help-block -limit">Maximum file size 50 MB.</div>
                                                                                            <div class="help-block -support">Supports: PNG., JPEG., JPEG2000</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </label>
                                                                            </div>
                                                                            <div class="col-12" id="boxFileNew">
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <!--  data-aos="fade-up" data-aos-duration="2000" -->
                                                                <div class="form-group" id="file-01">
                                                                    <table class="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">DATE</th>
                                                                                <th scope="col">FILE NAME</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody class="file-return">
                                                                            {* body file list *}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="contact-form-action">
                                                            <div class="wrapper">
                                                                <!--  data-aos="fade-left" data-aos-duration="2000" -->
                                                                <div>
                                                                    <button type="button" class="btn btn-border-primary rounded-pill" onclick="FuncPrevious('.formComplaint-step2', '.formComplaint-step3')">
                                                                        <div class="d-flex justify-content-center">
                                                                            <div class="icon rounded-circle">
                                                                                <span class="feather icon-chevron-left"></span>
                                                                            </div>
                                                                            <div class="txt">
                                                                                ย้อนกลับ
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                    <button type="submit" class="btn btn-primary btn-gradient rounded-pill" id="submitFormComplaint">
                                                                        <div class="d-flex justify-content-center">
                                                                            <div class="icon rounded-circle">
                                                                                <span class="feather icon-chevron-right"></span>
                                                                            </div>
                                                                            <div class="txt">
                                                                                ต่อไป
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4">
                                            <?php include('inc/components/right-side.php'); ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end Step 3 -->
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <?php include('inc/footer.php'); ?>
    </div>

    <!-- <?php include('inc/loadscript.php'); ?> -->

    <script>
        // $(".select-control").select2({
        //     minimumResultsForSearch: -1,
        // });
        $('.select-control').select2({
            minimumResultsForSearch: Infinity
        });
    </script>

</body>

</html>